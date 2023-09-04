import Login from 'components/Login';
import { Typography, Link } from '@mui/material';

const LoginPage = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Login form
      </Typography>
      <Typography align="center" mt={2} mb={2}>
        Enter and submit your credentials
      </Typography>
      <Login />
      <Typography align="center" mt={2}>
        Don't have an account? <Link href="/register"> Sign Up</Link>
      </Typography>
    </>
  );
};
export default LoginPage;
