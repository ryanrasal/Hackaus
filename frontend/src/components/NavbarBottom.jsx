import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import list from "../assets/navbar/list.png";
import home from "../assets/navbar/home.png";

export default function NavbarBottom() {
  const [position, setPosition] = useState(1);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="fixed bottom-0 flex flex-col justify-between w-full items-end">
      <div className="w-full border border-white h-20 bg-[#384a5a] flex flex-row justify-around items-center">
        <NavLink
          to="/admin/home"
          onClick={() => setPosition(1)}
          className={
            `min-h-0 min-w-0 relative shrink-0 transition-all 0.5s ease-in-out` +
            `${
              position === 1 &&
              user.isAdmin === 1 &&
              " z-10 p-[7px] rounded-full md:mr-10 bg-[#00ACB0] mb-[3.5rem] mr-3"
            }`
          }
        >
          <img alt="" className="w-full h-7" src={home} />
        </NavLink>
        {position === 1 && user.isAdmin === 1 && (
          <button
            className=" left-[-10px] md:left-[135px] bottom-9 absolute"
            type="button"
          >
            <img
              alt=""
              src="https://file.rendit.io/n/JmDPV30Lqtq2zHhGYhfI.svg"
            />
          </button>
        )}
        {user.isAdmin === 1 && (
          <NavLink
            to="/admin/ChooseFormPhone"
            className={
              `min-h-0 min-w-0 relative shrink-0 transition-all 0.5s ease-in-out` +
              `${
                position === 2 &&
                " z-10 p-[7px] rounded-full bg-[#00ACB0] md:ml-4 mb-[3.5rem]"
              }`
            }
            onClick={() => setPosition(2)}
          >
            <img
              alt=""
              src="https://file.rendit.io/n/ZExruSoumcloRitBTW6Y.svg"
              className="min-h-0 min-w-0 relative w-8 shrink-0"
            />
          </NavLink>
        )}
        {position === 2 && (
          <button
            className=" left-[118px] md:left-[44vw] bottom-9 absolute"
            type="button"
          >
            <img
              alt=""
              src="https://file.rendit.io/n/JmDPV30Lqtq2zHhGYhfI.svg"
            />
          </button>
        )}
        {user.isAdmin === 1 && (
          <NavLink
            to="/admin/dashboard"
            className={
              `min-h-0 min-w-0 relative shrink-0 transition-all 0.5s ease-in-out` +
              `${
                position === 3 &&
                " z-10 p-[7px] rounded-full md:ml-5 bg-[#00ACB0] mb-[3.5rem]"
              }`
            }
            onClick={() => setPosition(3)}
          >
            <img
              alt=""
              src={list}
              className="min-h-0 min-w-0 relative w-8 shrink-0"
            />
          </NavLink>
        )}
        {position === 3 && (
          <button
            className=" left-[247px] md:left-[77.5vw] bottom-9 absolute"
            type="button"
          >
            <img
              alt=""
              src="https://file.rendit.io/n/JmDPV30Lqtq2zHhGYhfI.svg"
            />
          </button>
        )}
      </div>
    </div>
  );
}
