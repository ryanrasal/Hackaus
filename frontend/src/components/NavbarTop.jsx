import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import arrowReturn from "../assets/navbar/arrowReturn.png";
import logo from "../assets/navbar/logo.png";
import power from "../assets/navbar/power.png";
import "react-toastify/dist/ReactToastify.css";

export default function NavbarTop() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const signOut = () => {
    localStorage.removeItem("user");
    toast.success("Déconnecté", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    navigate("/");
  };

  return (
    <div className="shadow-md bg-[#384a5a] border border-white w-full">
      <div className="flex items-center justify-between px-7">
        <button onClick={() => navigate(-1)} type="button">
          <img src={arrowReturn} alt="" />
        </button>
        <img src={logo} alt="" />
        <button onClick={() => setShowModal(true)} type="button">
          <img className="h-10" src={power} alt="" />
        </button>
      </div>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden mx-10 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl text-center font-semibold">
                    Voulez vous vraiment vous déconnecter ?
                  </h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Annuler
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={signOut}
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </div>
  );
}
