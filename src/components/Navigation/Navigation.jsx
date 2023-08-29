import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
