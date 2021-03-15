import React, { useState, useCallback, useRef, useEffect } from "react";
import "./canvasScreen.css";
import AppHeader from "../../components/AppHeader";
import ColorsMenu from "../../components/menus/colorsMenu/ColorsMenu";
import ToolsMenu from "../../components/menus/toolsMenu/ToolsMenu";
import BrushSizeMenu from "../../components/menus/brushSizeMenu/BrushSizeMenu";
import Canvas from "../../components/canvas/Canvas";
import DownloadButton from "../../components/buttons/downloadButton/DownloadButton";
import SmallScreenCanvasMenus from "../../components/menus/smallScreenCanvasMenus/SmallScreenCanvasMenus";
import SelectColorDialog from "../../components/menus/selectColorDialog/SelectColorDialog";

export default function CanvasScreen() {
  const [brushSetting, setBrushSetting] = useState({
    size: 16,
    end: "round",
    lineCap: "butt",
    color: "#000000",
  });
  const [isDrawing, setIsDrawing] = useState(false);
  const [toolSelected, setToolSelected] = useState("brush");
  const [lastCoords, setLastCoords] = useState({ x: 0, y: 0 });
  const [canvasRef, setCanvasRef] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ height: 150, width: 300 });
  const [selectColorDialog, setSelectColorDialog] = useState(false);

  const canvasContainerRef = useRef(null);

  useEffect(() => {
    if (canvasContainerRef?.current) {
      let containerHeight = canvasContainerRef?.current?.offsetHeight;
      let containerWidth = canvasContainerRef?.current?.offsetWidth;

      setCanvasSize({ height: containerHeight, width: containerWidth });
    }
  }, [canvasContainerRef]);

  // Callback function for getting the canvas ref.
  const memoizedGetRefFunction = useCallback((ref) => {
    setCanvasRef(ref);
  }, []);

  // Function for erase all the canvas.
  function clearCanvas() {
    let canvas = canvasRef?.current?.getContext("2d");
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  }

  // Helper function for getting the pointer coordenates when an event is fired in the canvas.
  function getPointerCoords(canvas, event) {
    let coords = {};
    let rect = canvas?.canvas?.getBoundingClientRect();
    if (event.touches) {
      coords = {
        x: event.touches[0].clientX - rect?.left,
        y: event.touches[0].clientY - rect?.top,
      };
    } else {
      coords = {
        x: event.clientX - rect?.left,
        y: event.clientY - rect?.top,
      };
    }

    return coords;
  }

  // Function fired when the user click the canvas.
  function handleCanvasClick(event) {
    event.preventDefault();
    let canvas = canvasRef?.current?.getContext("2d");
    let coords = getPointerCoords(canvas, event);

    canvas.lineWidth = brushSetting.size;
    canvas.lineJoin = brushSetting.end;
    canvas.lineCap = brushSetting.lineCap;

    canvas.strokeStyle =
      toolSelected === "brush"
        ? brushSetting.color
        : toolSelected === "eraser"
        ? "#ffffff"
        : brushSetting.color;
    canvas.beginPath();
    canvas.moveTo(coords.x, coords.y);
    setLastCoords({ x: coords.x, y: coords.y });
    setIsDrawing(true);
    return false;
  }

  // Function fired when the user muve the mouse inside the canvas.
  function handleDrawing(event) {
    if (isDrawing) {
      let canvas = canvasRef?.current?.getContext("2d");
      let coords = getPointerCoords(canvas, event);
      canvas.moveTo(lastCoords.x, lastCoords.y);
      canvas.lineTo(coords.x, coords.y);
      canvas.closePath();
      canvas.stroke();
      setLastCoords({ x: coords.x, y: coords.y });
    }
    return false;
  }

  // Function fired when the user unclick the mouse inside the canvas.
  function handleStopDrawing() {
    setIsDrawing(false);
  }

  // Function for change the brush color from a input [type="color"].
  function handleChangeColorSelected(event) {
    setBrushSetting({ ...brushSetting, color: event.target.value });
  }

  // Function use to download the drawing in the canvas as an img.
  function handleDownloadCanvas() {
    let canvas = canvasRef?.current?.getContext("2d");
    let imgData = canvas.getImageData(
      0,
      0,
      canvasSize.width,
      canvasSize.height
    );
    let data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 255) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = 255;
      }
    }
    canvas.putImageData(imgData, 0, 0);
    let img = canvas.canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = img;
    link.click();
  }

  return (
    <div className="body">
      <section className="separator" />
      <div className="root">
        <header className="header">
          <AppHeader />
        </header>
        <main className="content">
          <aside className="color-menu">
            <ColorsMenu
              selectColorFunction={(color) =>
                setBrushSetting({ brushSetting, color: color })
              }
              changePickerFunction={handleChangeColorSelected}
              colorSelected={brushSetting.color}
            />
          </aside>

          <div className="canvas" ref={canvasContainerRef}>
            <Canvas
              height={canvasSize.height}
              width={canvasSize.width}
              getRefFunction={memoizedGetRefFunction}
              onMouseDown={handleCanvasClick}
              onMouseMove={handleDrawing}
              onMouseUp={handleStopDrawing}
              onTouchStart={handleCanvasClick}
              onTouchMove={handleDrawing}
              onTouchEnd={handleStopDrawing}
              onMouseLeave={handleStopDrawing}
            />
          </div>
          <section className="bottom">
            <div className="brush-size-menu">
              <BrushSizeMenu
                sizeSelected={brushSetting.size}
                selectBrushSizeFunction={(size) =>
                  setBrushSetting({ ...brushSetting, size: size })
                }
                toolSelected={toolSelected}
              />
            </div>

            <div className="download-button">
              <DownloadButton onClick={handleDownloadCanvas} />
            </div>
          </section>

          <aside className="tool-menu">
            <ToolsMenu
              toolSelected={toolSelected}
              selectFunction={(tool) => setToolSelected(tool)}
              clearFunction={clearCanvas}
            />
          </aside>
          <div className="small-menus-container">
            <SmallScreenCanvasMenus
              colorSelected={brushSetting.color}
              toolSelected={toolSelected}
              openColorDialog={() => setSelectColorDialog(!selectColorDialog)}
              selectToolFunction={(tool) => setToolSelected(tool)}
              downloadFunction={handleDownloadCanvas}
            />
          </div>
        </main>
        <div className="footer"></div>
      </div>
      {selectColorDialog && (
        <div className="dialog">
          {selectColorDialog && (
            <SelectColorDialog
              closeDialog={() => setSelectColorDialog(false)}
              selectFunction={(color) =>
                setBrushSetting({ ...brushSetting, color })
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
