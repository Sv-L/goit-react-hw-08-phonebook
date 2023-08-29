import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Label, LoginBtn } from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
      <Form onSubmit={handleSubmitForm}>
        <Label>
          mail
          <Input
            type="email"
            name="email"
            placeholder="sophie@example.com"
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          password
          <Input
            type="password"
            name="password"
            onChange={handleInputChange}
            required
          />
        </Label>
        <LoginBtn type="submit">sing in</LoginBtn>
      </Form>

      <Link to="/register">Don't have an account? Sign Up</Link>
    </>
  );
};

export default Login;
