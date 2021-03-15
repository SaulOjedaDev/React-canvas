import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as NavigateBeforeIcon } from "../../../assets/icons/navigate_before-icon.svg";
import { ReactComponent as NavigateNextIcon } from "../../../assets/icons/navigate_next-icon.svg";
import SelectColorButton from "../../buttons/selectColorButton/SelectColorButton";

const colorsArray = [
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
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
`;

const ChangePageButton = styled.button`
  display: flex;
  height: 90%;
  width: auto;
  box-sizing: border-box;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  align-items: center;
  cursor: pointer;

  &:active {
    outline: none;
    border: none;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }
`;

const ColorContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: "center";
  margin: 0 4px;
`;

const ColorPage = styled.div`
  height: 100%;
  width: auto;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.firstPage ? "flex-end" : props.lastPage ? "flex-start" : "flex-end"};
`;

export default function SelectColorDialog({
  colors = colorsArray,
  selectFunction,
  closeDialog,
}) {
  const [colorPage, setColorPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let mutableColors = [...colors];

    let pages = Math.ceil(mutableColors.length / 5);

    setNumberOfPages(pages - 1);
    let newArray = [];
    while (mutableColors.length) {
      let chunk = mutableColors.splice(0, 5);
      newArray.push(chunk);
    }
    setPages(newArray);
  }, [colors]);

  function handleColorClick(color) {
    selectFunction(color);
    closeDialog();
  }
  return (
    <Root>
      {colorPage !== 0 && (
        <ChangePageButton onClick={() => setColorPage(colorPage - 1)}>
          <NavigateBeforeIcon />
        </ChangePageButton>
      )}
      <ColorPage
        lastPage={colorPage === numberOfPages}
        firstPage={colorPage === 0}
      >
        {pages[colorPage]?.map((color, index) => {
          return (
            <ColorContainer>
              <SelectColorButton
                key={index}
                color={color}
                selectFunction={() => handleColorClick(color)}
              />{" "}
            </ColorContainer>
          );
        })}
      </ColorPage>
      {colorPage < numberOfPages && (
        <ChangePageButton onClick={() => setColorPage(colorPage + 1)}>
          <NavigateNextIcon />
        </ChangePageButton>
      )}
    </Root>
  );
}
