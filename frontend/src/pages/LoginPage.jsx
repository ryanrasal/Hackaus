import { useState } from "react";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataLogin.email && dataLogin.password) {
      ("login", "post", dataLogin).then((res) => {
        Cookies.set("user", JSON.stringify(res.data.user));
        Cookies.set("token", res.data.token);
        navigate("/");
        toast.success(`Bienvenue ${res.data.user.firstname} !`);
      });
    } else {
      console.warn("erreur !");
    }
  };
  return (
    <div className="h-screen bg-[#94b0c8]">
      <div className=" flex flex-col px-4 mx-4 pt-[50%]">
        <h1 className="text-white text-center uppercase pb-2 text-3xl tracking-wider font-semibold">
          Emmaüs Connect
        </h1>
        <p className="tracking-wider text-center">
          Une nouvelle vie pour votre SmartPhone
        </p>
        <div className="my-10 w-full">
          <p className="font-bold pb-2 tracking-wider">Email</p>
          <input
            name="email"
            onChange={handleChange}
            className="py-2 mb-3 w-full rounded-md"
            type="text"
          />
          <p className="font-bold pb-2 tracking-wider">Mot de passe</p>
          <input
            name="password"
            onChange={handleChange}
            className=" py-2 w-full rounded-md"
            type="password"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="border py-2 text-white border-white shadow-lg rounded-md"
          type="button"
        >
          Se Connecter
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
