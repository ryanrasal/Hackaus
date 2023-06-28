import React from "react";
import arrowReturn from "../assets/arrowReturn.png";
import profil from "../assets/profil.png";
import logo from "../assets/logo.png";

export default function NavbarTop() {
  return (
    <div className="shadow-md bg-[#5e7c96] border border-white w-full">
      <div className="flex items-center justify-between px-7">
        <button type="button">
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
