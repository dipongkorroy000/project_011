import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const { loading } = useContext(AuthContext);
  
   if (loading) {
    return (
      <div className="w-full min-h-screen mx-auto flex items-center justify-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-334px)] mt-20">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
