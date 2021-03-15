import React from "react";
import styled from "styled-components";

const Tool = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 0;
  box-sizing: border-box;
  border: 2px solid #580c60;
  cursor: pointer;
  color: #580c60;
  background-color: ${(props) =>
    props.selected ? `rgba(88, 12, 96, 1)` : `transparent`};
  font-weight: bold;
  transition: 0.3s;
  outline: none;

  &:hover {
    background-color: rgba(88, 12, 96, 0.1);
    background-color: ${(props) =>
      props.selected ? `rgba(88, 12, 96, 0.85)` : `rgba(88, 12, 96, 0.2)`};
  }
`;

/**
 * Button to select a tool to use in the canvas.
 * @param {Object} props - Component props
 * @param {Component/Icon} props.childrem - Icon Component for this button.
 * @param {Bool} props.selected - Boolean to know if this tool is selected.
 * @param {function(toolName:event):void} props.onClick - Callback for select this tool when the button is clicked.
 */
export default function SelectToolButton({ children, selected, onClick }) {
  return (
    <Tool onClick={onClick} selected={selected}>
      {children}
    </Tool>
  );
}
