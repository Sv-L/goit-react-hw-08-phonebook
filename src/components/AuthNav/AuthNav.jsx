const { NavLink } = require('react-router-dom');

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register"> Registration </NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default AuthNav;
