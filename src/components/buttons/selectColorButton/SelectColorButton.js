import React from "react";
import styled from "styled-components";

const ColorButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#000000"};
  align-self: center;
  border: 0.05px solid #580c60;
  cursor: pointer;
`;

/**
 * Button to select a color from a list of colors.
 * @param {Object} props - Component props
 * @param {String} props.color - Color from the colors list.
 * @param {function(color:event):void} props.selectFunction - Callback for select a color when this button is clicked.
 */
export default function SelectColorButton({ color, selectFunction }) {
  return <ColorButton backgroundColor={color} onClick={selectFunction} />;
}
