import React, { useState } from "react";
import list from "../assets/list.png";

export default function NavbarBottom() {
  const [position, setPosition] = useState(1);

  return (
    <div className="fixed bottom-0 flex flex-col justify-between w-full items-end">
      <div className="w-full border border-white h-20 bg-[#002743] flex flex-row justify-around items-center">
        <button
          type="button"
          className={
            `min-h-0 min-w-0 relative shrink-0 transition-all 0.5s ease-in-out` +
            `${
              position === 1 &&
              " z-10 p-[7px] rounded-full bg-[#00ACB0] mb-[3.5rem] mr-3"
            }`
          }
          onClick={() => setPosition(1)}
        >
          <img
            alt=""
            className="w-full h-7"
            src="https://file.rendit.io/n/yJSOT2LJPggHTF2nm9IU.svg"
          />
        </button>
        {position === 1 && (
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
        <button
          type="button"
          className={
            `min-h-0 min-w-0 relative shrink-0 transition-all 0.5s ease-in-out` +
            `${
              position === 2 &&
              " z-10 p-[7px] rounded-full bg-[#00ACB0] mb-[3.5rem]"
            }`
          }
          onClick={() => setPosition(2)}
        >
          <img
            alt=""
            src="https://file.rendit.io/n/ZExruSoumcloRitBTW6Y.svg"
            className="min-h-0 min-w-0 relative w-8 shrink-0"
          />
        </button>
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
        <button
          type="button"
          className={
            `min-h-0 min-w-0 relative shrink-0 transition-all 0.5s ease-in-out` +
            `${
              position === 3 &&
              " z-10 p-[7px] rounded-full bg-[#00ACB0] mb-[3.5rem]"
            }`
          }
          onClick={() => setPosition(3)}
        >
          <img
            alt=""
            src={list}
            className="min-h-0 min-w-0 relative w-8 shrink-0"
          />
        </button>
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
