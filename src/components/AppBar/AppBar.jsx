import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
export default AppBar;
