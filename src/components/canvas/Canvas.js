import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  border: 0.2px solid grey;
  background-color: #fff;
  background: #fff;
  border: 1px solid #580c60;
  cursor: crosshair;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
`;

/**
 * Canvas when the user can draw.
 * @param {Object} props - Component props
 * @param {function(ref:ref):void} props.getRefFunction - Callback for getting the canvas ref.
 * @param {number} props.width - Canvas width in pixels.
 * @param {number} props.height - Canvas height in pixels.
 * @param {function(event:event):void} props.onMouseDown - Function fired when the user click the canvas.
 * @param {function(event:event):void} props.onMouseMove - Function fired when the user muve the mouse inside the canvas.
 * @param {function(event:event):void} props.onMouseUp - Function fired when the user unclick the mouse inside the canvas.
 * @param {function(event:event):void} props.onMouseLeave - Function fired when the user unclick the mouse inside the canvas.

 */
export default function Canvas(props) {
  const { getRefFunction, ...rest } = props;
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef?.current) {
      getRefFunction(canvasRef);
    }
  }, [canvasRef, getRefFunction]);

  return <StyledCanvas {...rest} ref={canvasRef} id="basic-canvas" />;
}
