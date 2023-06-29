/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function PhoneCard({ phone, handleClick }) {
  const { VITE_BACKEND_URL } = import.meta.env;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="flex flex-col w-full max-w-sm md:h-[78vh] border border-gray-200 rounded-lg shadow "
      onClick={() => handleClick(phone)}
    >
      <div className="flex-col  w-full text-center justify-around ">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {phone.model}
          <span className="text-red-500 ml-8">{`${phone.price}€`}</span>
        </h5>
        <div className="pt-2 text-1xl font-bold ">
          Stockage :{" "}
          <span className="text-red-500">{`${phone.storage} GO`}</span> Ram :
          <span className="text-red-500">{`${phone.ram} GO`}</span>{" "}
        </div>
      </div>
      <img
        className="h-52 mx-auto w-44 md:h-72 md:w-60 rounded-full"
        src={`${VITE_BACKEND_URL}/uploads/${phone.img}`}
        alt="product image"
      />
    </div>
  );
}

export default PhoneCard;
