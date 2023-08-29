import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Home Page of Phonebook! </h1>
      <p>
        Here, you can add contacts, view your saved contacts, and easily make
        calls to your contacts.
      </p>
      <p>
        To use the application, please
        <Link to="/login"> log in</Link> to your account or
        <Link to="/register"> register</Link>.
      </p>
    </>
  );
};
export default HomePage;
