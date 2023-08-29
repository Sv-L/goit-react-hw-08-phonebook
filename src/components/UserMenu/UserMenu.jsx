import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getEmail } from 'redux/auth/selectors';

const UserMenu = () => {
  const mail = useSelector(getEmail);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{mail}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
export default UserMenu;
