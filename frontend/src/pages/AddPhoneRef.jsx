import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddPhoneRef() {
  const [dataPhoneRef, setDataPhoneRef] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    state: "",
    img: "",
    price: "800" || "",
  });

  const inputRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPhoneRef((prevDataWine) => ({
      ...prevDataWine,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataPhoneRef.brand && dataPhoneRef.img && dataPhoneRef.ram) {
      const myHeaders = new Headers();
      const phoneRef = JSON.stringify(dataPhoneRef);
      const formData = new FormData();

      formData.append("phoneRef", phoneRef);
      formData.append("picture", inputRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };
      fetch(`http://localhost:5000/phone-ref`, requestOptions)
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

  const selects = [
    {
      name: "brand",
      label: "Marque",
      options: [
        { label: "Iphone", value: "Iphone" },
        { label: "Samsung", value: "Samsung" },
        { label: "Huawei", value: "Huawei" },
        { label: "Oppo", value: "Oppo" },
        { label: "Xiaomi", value: "Xiaomi" },
        { label: "Google", value: "Google" },
        { label: "OnePlus", value: "OnePlus" },
        { label: "LG", value: "LG" },
        { label: "Sony", value: "Sony" },
      ],
    },
    {
      name: "ram",
      label: "Mémoire",
      options: [
        { label: "2GB", value: "2" },
        { label: "4GB", value: "4" },
        { label: "8GB", value: "8" },
        { label: "16GB", value: "16" },
      ],
    },
    {
      name: "storage",
      label: "Stockage",
      options: [
        { label: "32GB", value: "32" },
        { label: "64GB", value: "64" },
        { label: "128GB", value: "128" },
        { label: "256GB", value: "256" },
      ],
    },
    {
      name: "state",
      label: "État",
      options: [
        { label: "Deee", value: 0 },
        { label: "Réparable", value: 1 },
        { label: "Reconditionable", value: 2 },
      ],
    },
  ];

  return (
    <div className=" flex md:flex-col w-full flex-wrap justify-center mt-6 ">
      <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
        Téléphone de référence
      </h2>
      <div className="flex md:w-[70vw] md:mx-auto flex-col md:flex-row md:flex-wrap ">
        {selects.map((select) => (
          <select
            key={select.name}
            name={select.name}
            value={dataPhoneRef[select.name]}
            onChange={onChange}
            className="w-80 md:w-48 my-2 md:mx-3 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          >
            <option value="">{select.label}</option>
            {select.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
        <input
          type="text"
          name="model"
          value={dataPhoneRef.model}
          onChange={onChange}
          className="w-80 md:mx-3 md:w-48 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Modèle"
        />

        <input
          type="text"
          onChange={onChange}
          name="price"
          value={dataPhoneRef.price}
          className="w-80 md:mx-3 md:w-48 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Prix"
        />
        <input
          type="file"
          onChange={onChange}
          ref={inputRef}
          name="img"
          className="my-4 ml-10"
          value={dataPhoneRef.img}
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-black md:w-[20vw] md:mx-auto hover:bg-red-600 hover:text-white text-white p-3 rounded-lg"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
