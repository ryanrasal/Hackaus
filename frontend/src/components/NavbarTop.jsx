import React from "react";
import { useNavigate } from "react-router-dom";
import arrowReturn from "../assets/navbar/arrowReturn.png";
import profil from "../assets/navbar/profil.png";
import logo from "../assets/navbar/logo.png";

export default function NavbarTop() {
  const navigate = useNavigate();
  return (
    <div className="shadow-md bg-[#384a5a] border border-white w-full">
      <div className="flex items-center justify-between px-7">
        <button type="button" onClick={() => navigate(-1)}>
          <img src={arrowReturn} alt="" />
        </button>
        <img src={logo} alt="" />
        <button type="button">
          <img className="h-10" src={profil} alt="" />
        </button>
      </div>
    </div>
  );
}
