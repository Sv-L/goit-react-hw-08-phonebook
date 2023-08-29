import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from 'redux/auth/operations';
import { Form, Input, Label, SingUp } from './RegisterForm.styled';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        <Label>
          name
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Sophie"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          mail
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="sophie@example.com"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          password
          <Input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleInputChange}
          />
        </Label>
        <SingUp type="submit">sing up</SingUp>
      </Form>
      <p>
        if you have just registered, go to{' '}
        <Link to="/login">the login page</Link>
      </p>
    </>
  );
};

export default RegisterForm;
