import React from "react";
import styled from "styled-components";
import SelectBrushSizeButton from "../../buttons/selectBrushSizeButton/SelectBrushSizeButton";
import { ReactComponent as BrushIcon } from "../../../assets/icons/brush-icon.svg";
import { ReactComponent as EraserIcon } from "../../../assets/icons/eraser-icon.svg";

const sizes = [12, 16, 24, 32, 40];

const Menu = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 14px;
  border: 1px solid #580c60;
  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
`;

const IconContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #580c60;
  border-radius: 14px 0 0 14px;
  border: 1px solid #580c60;
`;

const StyledBrushIcon = styled(BrushIcon)`
  fill: #fff;
  width: 30px;
  height: 30px;
`;

const StyledEraserIcon = styled(EraserIcon)`
  fill: #fff;
  width: 30px;
  height: 30px;
`;

const ButtonsContainer = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  border: none;
`;

/**
 * Menu for select a the brush/eraser size to use.
 * @param {Object} props - Component props
 * @param {number} props.sizeSelected - Current brush/eraser size selected.
 * @param {function(size:number):void} props.selectBrushSizeFunction - Callback for select this brush size when the button is clicked.
 * @param {String} props.toolSelected - String to know what tool is selected and choose which icon to render.
 */
export default function BrushSizeMenu({
  sizeSelected,
  selectBrushSizeFunction,
  toolSelected,
}) {
  return (
    <Menu>
      <IconContainer>
        {toolSelected === "brush" ? (
          <StyledBrushIcon />
        ) : toolSelected === "eraser" ? (
          <StyledEraserIcon />
        ) : (
          <StyledBrushIcon />
        )}
      </IconContainer>
      <ButtonsContainer>
        {sizes.map((size, index) => {
          return (
            <SelectBrushSizeButton
              key={index}
              size={size}
              onClick={() => selectBrushSizeFunction(size)}
              selected={size === sizeSelected}
            />
          );
        })}
      </ButtonsContainer>
    </Menu>
  );
}
