// @ts-nocheck
import Page from '@/components/page';
import { FormControl } from '@/components/forms/form';
import { InputControl } from '@/components/forms/controls';
import { Button, Link } from '@mui/material';
import { registerUser } from '@/services/auth';
import { Heading } from '@/components/typography';
import { AuthLayout, RedirectToForm } from '@/pages/auth/common-components';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: { username: string; password: string }) => {
    const { error, ok } = await registerUser(data);
    if (ok) {
      navigate('/login');
    }
  };

  return (
    <Page>
      <AuthLayout>
        <ResigterForm handleSubmit={handleSubmit} />
      </AuthLayout>
    </Page>
  );
};

const ResigterForm = ({ handleSubmit }: { handleSubmit: () => void }) => {
  return (
    <FormControl onSubmit={handleSubmit}>
      <Heading>Sign up</Heading>
      <InputControl required label="email" name={'email'} />
      <InputControl type={'password'} required label="password" name={'password'} />
      <Button variant="outlined" type="submit">
        submit
      </Button>
      <RedirectToForm gap={8}>
        Don't have an account?{' '}
        <Link href="/login" underline="always">
          Sign In
        </Link>
      </RedirectToForm>
    </FormControl>
  );
};
