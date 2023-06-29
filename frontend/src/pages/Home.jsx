import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneCard from "../components/PhoneCard";
import circle from "../assets/home/circle.svg";
import phoneDoctor from "../assets/home/phoneDoctor.png";

export default function Home() {
  const [phoneRef, setPhoneRef] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filterRef = phoneRef.filter(
    (item) =>
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
  );
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

  const handleClick = (phone) => {
    localStorage.setItem("selectedPhone", JSON.stringify(phone));
    navigate("/my-phone/compare");
  };
  return (
    <div className="overflow-hidden">
      <div className="text-3xl mb-[5vh] tracking-wider font-bold flex flex-col items-center justify-center">
        <div className="mt-5 mb-4">
          <h2 className="uppercase">Bienvenue</h2>
        </div>
        <div className="flex flex-col  md:flex-row md:justify-evenly items-center mb-4 justify-center w-full space-x-1">
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="block w-2/3 md:w-1/2 mr-2 px-4 py-2 placeholder:text-xl bg-white border rounded-full "
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
                className="w-5 h-10"
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
      </div>
      {search !== "" ? (
        <div className="flex flex-col md:flex-row md:justify-around">
          {filterRef.map((phone) => (
            <PhoneCard handleClick={handleClick} phone={phone} />
          ))}
        </div>
      ) : (
        <div className="relative w-full h-[60vh]">
          <img
            className="absolute md:flex md:mx-auto md:w-full z-0 md:top-0 md:left-0 top-[55px] left-6 h-2/3"
            src={circle}
            alt=""
          />
          <img
            className="relative md:flex md:mx-auto md:top-8 md:-left-7  top-[6rem] z-20 left-14 h-1/2"
            src={phoneDoctor}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
