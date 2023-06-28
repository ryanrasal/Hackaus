import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddPhone() {
  const [dataPhone, setDataPhone] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    state: "",
    img: "",
    category: "",
  });

  const inputRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPhone((prevDataWine) => ({
      ...prevDataWine,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataPhone.brand && dataPhone.img && dataPhone.ram) {
      const myHeaders = new Headers();
      const phone = JSON.stringify(dataPhone);
      const formData = new FormData();

      formData.append("phone", phone);
      formData.append("picture", inputRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };
      fetch(`http://localhost:5000/phone`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          toast.success("Téléphone Ajouté", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        })
        .catch(console.error);
    }
  };

  const inputs = [
    { name: "brand", placeholder: "marque" },
    { name: "model", placeholder: "modèle" },
    { name: "ram", placeholder: "ram" },
    { name: "storage", placeholder: "stockage" },
    { name: "state", placeholder: "état" },
    { name: "category", placeholder: "catégorie" },
  ];

  return (
    <div className=" flex flex-wrap justify-center mt-6 ">
      {inputs.map((input) => (
        <input
          key={input.name}
          type="text"
          name={input.name}
          value={dataPhone[input.name]}
          onChange={onChange}
          placeholder={input.placeholder}
          className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
        />
      ))}
      <input
        type="file"
        onChange={onChange}
        ref={inputRef}
        name="img"
        value={dataPhone.img}
      />
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-black text-white p-3 rounded-lg"
      >
        Enregistrer
      </button>
    </div>
  );
}
