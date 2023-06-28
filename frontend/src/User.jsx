import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavbarBottom from "./components/NavbarBottom";
import NavbarTop from "./components/NavbarTop";

export default function User() {
  return (
    <div>
      <NavbarTop />
      <Outlet />
      <ToastContainer />
      <NavbarBottom />
    </div>
  );
}
