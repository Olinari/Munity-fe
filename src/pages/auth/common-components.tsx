import styled from 'styled-components';
import { ReactNode } from 'react';
import { Heading } from '@/components/typography';
import { FlexLayout } from '@/components/layout/flex-layout';

export const AuthLayout = styled(({ children, ...props }: { children: ReactNode }) => (
  <AuthContainer {...props}> {children}</AuthContainer>
))`
  ${Heading} {
    font-size: 20px;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  form {
    margin-top: 40px;
    padding: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    gap: 40px;
    background-color: #ffffff03;

    button {
      width: calc(100% - 40px);
      margin: 20px;
    }
  }
`;

export const RedirectToForm = styled(FlexLayout)`
  border-top: 1px solid #ffffff1c;
  padding-top: 24px;
  font-size: 12px;
  white-space: nowrap;
`;
