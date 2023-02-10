import styled from "styled-components";
import React from "react";
import { Logo } from "./logo";

const Topbar = ({ children = null }) => (
  <Topbar.Container>
    <Logo />
    {children}
  </Topbar.Container>
);

Topbar.Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0;
`;

export default Topbar;
