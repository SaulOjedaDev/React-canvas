import React from "react";
import styled from "styled-components";
import SelectToolButton from "../../buttons/selectToolButton/SelectToolButton";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download-icon.svg";
import { ReactComponent as EraserIcon } from "../../../assets/icons/eraser-icon.svg";
import { ReactComponent as BrushIcon } from "../../../assets/icons/brush-icon.svg";

const Root = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 2%;
  justify-content: space-around;
  background-color: #fffade;
  -webkit-box-shadow: 0px 9px 17px 4px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 9px 17px 4px rgba(0, 0, 0, 0.43);
`;

const ButtonContainer = styled.div`
  width: 22%;
  height: 90%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorButton = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "#000")};
`;

const StyledDownloadIcon = styled(DownloadIcon)`
  width: 60%;
  height: 24px;
  fill: #580c60;
`;

const StyledEraserIcon = styled(EraserIcon)`
  fill: ${(props) => (props.selected ? "#ffffff" : "#580c60")};
  transition: 0.3s;
  width: 24px;
  height: 24px;
`;

const StyledBrushIcon = styled(BrushIcon)`
  fill: ${(props) => (props.selected ? "#ffffff" : "#580c60")};
  width: auto;
  height: auto;
  transition: 0.3s;
`;

export default function SmallScreenCanvasMenus({
  colorSelected,
  toolSelected,
  openColorDialog,
  selectToolFunction,
  downloadFunction,
}) {
  return (
    <Root>
      <ButtonContainer>
        <SelectToolButton onClick={openColorDialog}>
          <ColorButton color={colorSelected} />
        </SelectToolButton>
      </ButtonContainer>

      <ButtonContainer>
        <SelectToolButton
          selected={toolSelected === "brush"}
          onClick={() => selectToolFunction("brush")}
        >
          <StyledBrushIcon selected={toolSelected === "brush"} />
        </SelectToolButton>
      </ButtonContainer>

      <ButtonContainer>
        <SelectToolButton
          selected={toolSelected === "eraser"}
          onClick={() => selectToolFunction("eraser")}
        >
          <StyledEraserIcon selected={toolSelected === "eraser"} />
        </SelectToolButton>
      </ButtonContainer>

      <ButtonContainer>
        <SelectToolButton onClick={downloadFunction}>
          <StyledDownloadIcon />
        </SelectToolButton>
      </ButtonContainer>
    </Root>
  );
}
