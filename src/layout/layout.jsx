import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen ">
      <Nav />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;