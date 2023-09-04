import RegisterForm from 'components/RegisterForm';
// import { Link } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

const Registration = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Create an account
      </Typography>
      <Typography align="center" mt={2} mb={2}>
        Fill out and send the form
      </Typography>
      <RegisterForm />
      <Typography align="center" mt={2}>
        if you have just registered, go to{' '}
        <Link href="/login">the login page</Link>
      </Typography>
    </>
  );
};

export default Registration;
