import { useState } from "react";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
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
          setTimeout(() => {
            setIsLoading(false);
            navigate("/admin/home");
          }, 2000);
          toast.success(`Bienvenue ${result.user.firstname} !`);
        })
        .catch((error) => {
          toast.error(`Erreur lors de la connexion: ${error.message}`);
        });
    }
  };

  return (
    <div className="h-screen bg-[#5e7c96]">
      {isLoading ? (
        <Loading />
      ) : (
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
              className="py-2 pl-2 mb-3 w-full rounded-md"
              type="text"
            />
            <p className="font-bold pb-2 tracking-wider">Mot de passe</p>
            <input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className=" py-2 pl-2 w-full rounded-md"
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
      )}
    </div>
  );
}

export default LoginPage;
