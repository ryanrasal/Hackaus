import React from "react";
import { useNavigate } from "react-router-dom";
import arrowReturn from "../assets/navbar/arrowReturn.png";
import logo from "../assets/navbar/logo.png";
import power from "../assets/navbar/power.png";

export default function NavbarTop() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="shadow-md bg-[#384a5a] border border-white w-full">
      <div className="flex items-center justify-between px-7">
        <button onClick={() => navigate(-1)} type="button">
          <img src={arrowReturn} alt="" />
        </button>
        <img src={logo} alt="" />
        <button onClick={() => signOut()} type="button">
          <img className="h-10" src={power} alt="" />
        </button>
      </div>
    </div>
  );
}
