import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneCard from "@components/PhoneCard";
import circle from "../assets/home/circle.svg";
import phoneDoctor from "../assets/home/phoneDoctor.png";

export default function Home() {
  const [phoneRef, setPhoneRef] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/phone-ref")
      .then((result) => {
        setPhoneRef(result.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const filterRef = phoneRef.filter(
    (item) =>
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="text-3xl tracking-wider font-bold flex flex-col items-center justify-center h-[20vh]">
        <div className="my-10">
          <h2 className="uppercase">Bienvenue</h2>
        </div>
        <div className="flex items-center justify-center w-full space-x-1">
          <input
            type="text"
            className="block w-2/3  px-4 py-2 placeholder:text-xl bg-white border rounded-full "
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="px-4 h-full text-white bg-black rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {search.length > 2 ? (
        filterRef.map((phone) => <PhoneCard phone={phone} />)
      ) : (
        <div className="relative w-full h-[60vh]">
          <img
            className="absolute z-0 top-14 left-6 h-2/3"
            src={circle}
            alt=""
          />
          <img
            className="relative top-28 z-20 left-14 h-1/2"
            src={phoneDoctor}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
