/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function PhoneCard({ phone, handleClick }) {
  const { VITE_BACKEND_URL } = import.meta.env;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="flex w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#002743] dark:border-gray-700"
      onClick={() => handleClick(phone)}
    >
      <img
        className=" h-60 rounded-t-lg"
        src={`${VITE_BACKEND_URL}/uploads/${phone.img}`}
        alt="product image"
      />

      <div className="flex-col  h-full w-full ">
        <div className="flex flex-col  mt-6">
          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {phone.model}
          </h5>

          <div className="pt-2 text-1xl font-bold text-gray-400 dark:text-white">
            {`Stockage : ${phone.storage} gb`}
          </div>
          <div className="pt-2 text-1xl font-bold text-gray-400 dark:text-white">
            {`RAM :  ${phone.ram} gb`}
          </div>
          <div className=" pt-8 text-2xl font-bold text-gray-400 dark:text-white">
            {`${phone.price}€`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
