import { useState } from "react";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      fetch("http://localhost:5000/login", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Erreur ${response.status}: ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((result) => {
          Cookies.set("user", JSON.stringify(result.user));
          Cookies.set("token", result.token);
          toast.success(`Bienvenue ${result.user.firstname} !`);
          navigate("home");
        })
        .catch((error) => {
          toast.error(`Erreur lors de la connexion: ${error.message}`);
        });
    }
  };

  return (
    <div className="h-screen bg-[#94b0c8]">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col px-4 mx-4 pt-[50%]"
      >
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="py-2 mb-3 w-full rounded-md"
            type="text"
          />
          <p className="font-bold pb-2 tracking-wider">Mot de passe</p>
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className=" py-2 w-full rounded-md"
            type="password"
          />
        </div>
        <button
          className="border py-2 text-white border-white shadow-lg rounded-md"
          type="submit"
        >
          Se Connecter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
