import React from "react";
import styled from "styled-components";
import Topbar from "./top-bar";

const Page = ({ children }) => {
  return (
    <PageContainer>
      <Topbar />
      {children}
    </PageContainer>
  );
};

export default Page;

const PageContainer = styled.section`
  height: 100vh;
  background-color: var(--color-dark-blue);
  padding: 0px 60px;
`;
