import React from "react";
import styled from "styled-components";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download-icon.svg";

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  background-color: #580c60;
  font-weight: bold;
  transition: 0.3s;
  outline: none;
  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);
  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);

  &:hover {
    background-color: #3a0740;
  }
`;

const StyledDownloadIcon = styled(DownloadIcon)`
  fill: #fff;
  width: 30px;
  height: 30px;
  margin-right: 0.3rem;
`;

const ButtonContent = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function DownloadButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <ButtonContent>
        <StyledDownloadIcon />
        Descargar
      </ButtonContent>
    </StyledButton>
  );
}
