import React from "react";
import styled from "styled-components";
import SelectColorButton from "../../buttons/selectColorButton/SelectColorButton";
import ColorPicker from "../../inputs/colorPicker/ColorPicker";

const colors = [
  "#000000",
  "#666666",
  "#0050CD",
  "#FFFFFF",
  "#AAAAAA",
  "#26C9FF",
  "#017420",
  "#691506",
  "#964112",
  "#11B03C",
  "#FF0013",
  "#FF7829",
  "#B0701C",
  "#99004E",
  "#CB5A57",
  "#FFC126",
  "#FF008F",
  "#FEAFA8",
];

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.5rem;
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  border: 1px solid #580c60;
  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
`;

const ColorsGrid = styled.div`
  height: 90%;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  box-sizing: border-box;
  padding: 0.5rem;
`;

const GrowDiv = styled.div`
  flex-grow: 1;
`;

/**
 * Menu for change brush color.
 * @param {Object} props - Component props
 * @param {function(color:string):void} props.selectColorFunction - Callback for select a color from the props.colors list.
 * @param {function(event:event):void} props.changePickerFunction - Callback for select a color from the input [type="color"].
 * @param {String} props.colorSelected - Current brush color.
 */
export default function ColorsMenu({
  selectColorFunction,
  changePickerFunction,
  colorSelected,
}) {
  return (
    <Root>
      <ColorsGrid>
        {colors.map((color, index) => {
          return (
            <SelectColorButton
              key={index}
              color={color}
              selectFunction={() => selectColorFunction(color)}
            />
          );
        })}
      </ColorsGrid>
      <GrowDiv />
      <ColorPicker value={colorSelected} onChange={changePickerFunction} />
    </Root>
  );
}
