/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function PhoneCard({ phone }) {
  const { VITE_BACKEND_URL } = import.meta.env;

  return (
    <div className="flex  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 h-60 rounded-t-lg"
        src={`${VITE_BACKEND_URL}/uploads/${phone.img}`}
        alt="product image"
      />

      <div className="flex-col h-full w-full p-8 justify-around ">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {phone.model}
        </h5>

        <div className="pt-2 text-1xl font-bold text-gray-400 dark:text-white">
          {`Stockage : ${phone.storage} gb`}
        </div>
        <div className="pt-2 text-1xl font-bold text-gray-400 dark:text-white">
          {`ram : ${phone.ram} gb`}
        </div>
        <div className=" pt-8 text-2xl font-bold text-gray-400 dark:text-white">
          {`${phone.price}€`}
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
