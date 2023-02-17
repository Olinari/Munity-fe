import { ReactNode } from 'react';
import styled from 'styled-components';
import Topbar from './top-bar';

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <PageContainer>
      <Topbar />
      {children}
    </PageContainer>
  );
};

export default Page;

const PageContainer = styled.section`
  height: calc(100vh);
  background-color: var(--color-dark-blue);
  padding: 0px 60px;
  overflow: scroll;

  ${Topbar.Container} {
  }
`;
