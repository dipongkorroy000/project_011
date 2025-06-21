import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-334px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
