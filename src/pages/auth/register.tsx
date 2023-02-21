import { ReactNode } from 'react';
import Page from '@/components/page';
import { FormControl } from '@/components/forms/form';
import { InputControl } from '@/components/forms/controls';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { registerUser } from '@/services/auth';

export const Register = () => {
  const handleSubmit = async data => {
    await registerUser(data);
  };

  return (
    <Page>
      <AuthLayout>
        <ResigterForm handleSubmit={handleSubmit} />
      </AuthLayout>
    </Page>
  );
};

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <AuthContainer> {children}</AuthContainer>
);

const ResigterForm = ({ handleSubmit }) => {
  return (
    <FormControl onSubmit={handleSubmit}>
      <InputControl required label="email" name={'email'} />
      <InputControl label="password" name={'password'} />
      <Button type={'submit'}>submit</Button>
    </FormControl>
  );
};

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
    gap: 20px;
    border: 1px solid #ffffff1c;
  }
`;
