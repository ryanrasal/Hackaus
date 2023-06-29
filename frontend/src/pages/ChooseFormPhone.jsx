import React from "react";
import { NavLink } from "react-router-dom";
import circle from "../assets/home/circle.svg";
import phoneDoctor from "../assets/home/phoneDoctor.png";

export default function ChooseFormPhone() {
  return (
    <div className="flex flex-col justify-center mt-6">
      <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
        Choisis un Téléphone à ajouter
      </h2>
      <div className="flex flex-col justify-center text-center">
        <div className="bg-[#00ACB0] w-1/2 mb-4 mx-auto hover:bg-red-600 hover:text-white text-white p-3 rounded-lg">
          <NavLink to="/admin/addPhone">Téléphone d'occasion</NavLink>
        </div>
        <div className="bg-[#00ACB0] w-1/2 mx-auto hover:bg-red-600 hover:text-white text-white p-3 rounded-lg">
          <NavLink to="/admin/addPhoneRef">Téléphone de référence</NavLink>
        </div>
      </div>
      <div className="relative w-full h-[60vh]">
        <img
          className="absolute md:flex md:mx-auto md:left-0 md:top-2 md:w-full z-0 top-[55px] left-6 h-2/3"
          src={circle}
          alt=""
        />
        <img
          className="relative md:flex md:mx-auto md:top-6 md:left-0  top-[96px] z-20 left-14 h-1/2"
          src={phoneDoctor}
          alt=""
        />
      </div>
    </div>
  );
}
