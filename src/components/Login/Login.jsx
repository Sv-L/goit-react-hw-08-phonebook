import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, TextField, Button, Paper } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import { isLoading } from 'redux/auth/selectors';
import { Oval } from 'react-loader-spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const handleInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Paper
        elevation={16}
        sx={{
          margin: '0 auto',
          padding: '20px',
          width: '400px',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <form onSubmit={handleSubmitForm}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              width: '300px',
              margin: '0 auto',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AlternateEmailIcon
                sx={{ color: 'action.active', mr: 2, my: 1 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                type="email"
                name="email"
                onChange={handleInputChange}
                required
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <KeyIcon sx={{ color: 'action.active', mr: 2, my: 1 }} />
              <TextField
                fullWidth
                label="Password"
                variant="standard"
                type="password"
                name="password"
                onChange={handleInputChange}
                required
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                minHeight: '50',
                width: '400',
              }}
            >
              {loading ? (
                <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="#4fa94d"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ marginTop: '20px' }}
                >
                  sing in
                </Button>
              )}
            </Box>
          </Box>
        </form>
      </Paper>
    </>
  );
};
export default Login;
