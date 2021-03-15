import React from "react";
import styled from "styled-components";
import { ReactComponent as BrushIcon } from "../assets/icons/brush-icon.svg";

const RootContainer = styled.div`
  background-color: transparent;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  background-color: transparent;
  height: 100%;
  width: auto;
  align-items: center;
  cursor: pointer;
`;

const StyledBrushIcon = styled(BrushIcon)`
  fill: #fff;
  width: 30px;
  height: 30px;
  margin-right: 0.3rem;
`;

const AppName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  padding: 0;
`;

const GrowDiv = styled.div`
  flex-grow: 1;
`;

/**
 * Top Header of the web app.
 */
export default function AppHeader() {
  return (
    <RootContainer>
      <GrowDiv />
      <LogoContainer>
        <AppName>Brushy</AppName>
        <StyledBrushIcon />
      </LogoContainer>

      <GrowDiv />
    </RootContainer>
  );
}
