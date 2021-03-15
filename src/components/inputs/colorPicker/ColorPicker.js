import React from "react";
import styled from "styled-components";

const Picker = styled.input`
  width: 90%;
  height: 13%;
  border-radius: 14px;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
`;

/**
 * input [type="color"] to select a brush color.
 * @param {Object} props - Component props
 * @param {String} props.value - Current brush color selected.
 * @param {function(event:event):void} props.onChange - Callback for select a color from the input value.
 */
export default function ColorPicker({ value, onChange }) {
  return <Picker type="color" value={value} onChange={onChange} />;
}
