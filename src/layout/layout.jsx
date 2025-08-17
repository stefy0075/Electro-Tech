import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BottomTabBar from '../components/BottomTabBar';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default Layout;
