import NavigationBar from 'components/NavigationBar';
// import ResponsiveAppBar from 'components/Bar';
import Loader from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <header>
        <NavigationBar />
        {/* <ResponsiveAppBar /> */}
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
      {/* <footer>
      </footer> */}
    </>
  );
};

export default Layout;
