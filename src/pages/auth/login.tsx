import { Heading } from '@/components/typography';
import { AuthLayout, RedirectToForm } from '@/pages/auth/common-components';
import { useNavigate } from 'react-router-dom';
import Page from '@/components/page';
import { FormControl } from '@/components/forms/form';
import { InputControl } from '@/components/forms/controls';
import { Button, Link } from '@mui/material';
import { loginUser, restoreLogin } from '@/services/auth';
import { useQuery } from 'react-query';

export const Login = () => {
  const navigate = useNavigate();

  const { data: isLoggedIn } = useQuery('group', async () => await restoreLogin());

  if (isLoggedIn) {
    navigate('/');
  }

  const handleSubmit = async (data: { email: string; password: string }) => {
    const { ok } = await loginUser(data);
    if (ok) {
      navigate('/');
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

const ResigterForm = ({ handleSubmit }) => {
  return (
    <FormControl onSubmit={handleSubmit}>
      <Heading>Sign In</Heading>
      <InputControl required label="email" name={'email'} />
      <InputControl type={'password'} required label="password" name={'password'} />
      <Button variant="outlined" type="submit">
        submit
      </Button>
      <RedirectToForm gap={8}>
        Don't have an account?{' '}
        <Link href="/register" underline="always">
          Sign up
        </Link>
      </RedirectToForm>
    </FormControl>
  );
};
