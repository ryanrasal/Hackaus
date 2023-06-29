import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function AdminFormUser() {
  const [dataUser, setDataUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    if (
      dataUser.firstname &&
      dataUser.lastname &&
      dataUser.email &&
      dataUser.password
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify(dataUser);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      fetch(`http://localhost:5000/users`, requestOptions)
        .then((response) => {
          console.warn(response.status);

          if (response.status !== 201) {
            throw new Error(
              `Erreur ${response.status}: ${response.statusText}`
            );
          } else {
            return response.text();
          }
        })
        .then(() => {
          toast.success(`Utilisateur ${dataUser.firstname} créé ! `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          navigate("/admin/dashboard");
        })
        .catch(console.error);
    }
  };

  const inputs = [
    { type: "text", name: "firstname", placeholder: "Prénom" },
    { type: "text", name: "lastname", placeholder: "Nom" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "password", name: "password", placeholder: "Mot de passe" },
  ];

  return (
    <div className=" flex md:flex-col w-full flex-wrap justify-center mt-6 ">
      <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
        Ajouter un nouvel utilisateur
      </h2>
      <form
        onSubmit={handleCreateUser}
        className="flex md:w-[70vw] md:mx-auto flex-col md:flex-row md:flex-wrap "
      >
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            value={dataUser[input.name]}
            onChange={onChange}
            placeholder={input.placeholder}
            className="w-80 md:w-48 my-2 md:mx-3 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          />
        ))}

        <button
          type="submit"
          className="bg-black md:w-[20vw] md:mx-auto hover:bg-red-600 hover:text-white text-white p-3 rounded-lg"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
