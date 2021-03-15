import React from "react";
import styled from "styled-components";

const BrushSizeButton = styled.button`
  width: ${(props) => props.size && `${props.size}px`};
  height: ${(props) => props.size && `${props.size}px`};
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? "rgba(88, 12, 96, 1)" : "rgba(88, 12, 96, 0.7)"};
  align-self: center;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
    background-color: rgba(88, 12, 96, 0.85);
  }
`;

/**
 * Button to select a the brush size to use.
 * @param {Object} props - Component props
 * @param {number} props.size - Size for the brush in pixels.
 * @param {Bool} props.selected - Boolean to know if this brush size is selected.
 * @param {function(size):void} props.onClick - Callback for select this brush size when the button is clicked.
 */
export default function SelectBrushSizeButton({ size, selected, onClick }) {
  return <BrushSizeButton size={size} onClick={onClick} selected={selected} />;
}
