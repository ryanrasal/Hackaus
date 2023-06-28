import React from "react";
import arrowReturn from "../assets/navbar/arrowReturn.png";
import profil from "../assets/navbar/profil.png";
import logo from "../assets/navbar/logo.png";

export default function NavbarTop() {
  return (
    <div className="shadow-md bg-[#384a5a] border border-white w-full">
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
