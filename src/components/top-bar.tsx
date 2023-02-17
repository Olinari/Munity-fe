import styled from 'styled-components';
import { ReactNode } from 'react';
import { Logo } from './logo';

const Topbar = ({ children }: { children?: ReactNode }) => (
  <Topbar.Container>
    <Logo />
    {children}
  </Topbar.Container>
);

Topbar.Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px 0 8px 0;
`;

export default Topbar;
