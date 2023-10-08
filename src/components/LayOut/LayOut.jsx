import { Outlet } from "react-router";
import Navbar from "../Header/Navbar";
import Footer from "./../Footer/Footer";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayOut;
