import React from "react";
import styled from "styled-components";
import SelectToolButton from "../../buttons/selectToolButton/SelectToolButton";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil-icon.svg";
import { ReactComponent as EraserIcon } from "../../../assets/icons/eraser-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-icon.svg";

const Root = styled.div`
  height: 50vh;
  width: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  border: 1px solid #580c60;
  padding: 0.5rem;
  box-sizing: border-box;
  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
`;

const Grid = styled.div`
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.25rem;
  box-sizing: border-box;
  padding: 0.5rem;
`;

const StyledPencilIcon = styled(PencilIcon)`
  fill: ${(props) => (props.selected ? "#ffffff" : "#580c60")};
  width: auto;
  height: auto;
  transition: 0.3s;
`;
const StyledEraserIcon = styled(EraserIcon)`
  fill: ${(props) => (props.selected ? "#ffffff" : "#580c60")};
  width: 24px;
  height: 24px;
  transition: 0.3s;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  fill: #580c60;
  width: auto;
  height: auto;
`;

/**
 * Menu for change the tool to use in the canvas.
 * @param {Object} props - Component props
 * @param {String} props.toolSelected - Current tool selected.
 * @param {function(tool:string):void} props.selectFunction - Callback for select a tool when a SelectToolButton is clicked.
 * @param {function():void} props.clearFunction - Callback for erase the whole canvas.
 */
export default function ToolsMenu({
  toolSelected,
  selectFunction,
  clearFunction,
}) {
  return (
    <Root>
      <Grid>
        <SelectToolButton
          selected={toolSelected === "brush"}
          onClick={() => selectFunction("brush")}
        >
          <StyledPencilIcon selected={toolSelected === "brush"} />
        </SelectToolButton>
        <SelectToolButton
          selected={toolSelected === "eraser"}
          onClick={() => selectFunction("eraser")}
        >
          <StyledEraserIcon selected={toolSelected === "eraser"} />
        </SelectToolButton>

        <SelectToolButton onClick={clearFunction}>
          <StyledDeleteIcon />
        </SelectToolButton>
      </Grid>
    </Root>
  );
}
