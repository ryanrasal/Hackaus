import React, { useState } from "react";
import PhoneCard from "../components/PhoneCard";

function Compare() {
  const [selectedPhone] = useState(
    JSON.parse(localStorage.getItem("selectedPhone"))
  );
  const [dataPhoneRef, setDataPhoneRef] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    state: "",
    img: "",
    price: "800" || "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPhoneRef((prevDataWine) => ({
      ...prevDataWine,
      [name]: value,
    }));
  };

  const selects = [
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
    <div>
      <PhoneCard phone={selectedPhone} />
      <div>
        <input
          type="text"
          name="Marque"
          readOnly
          value={selectedPhone.brand}
          className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Modèle"
        />
        <input
          type="text"
          name="model"
          readOnly
          value={selectedPhone.model}
          className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Modèle"
        />
        {selects.map((select) => (
          <select
            key={select.name}
            name={select.name}
            value={dataPhoneRef[select.name]}
            onChange={onChange}
            className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
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
          onChange={onChange}
          name="price"
          value={dataPhoneRef.price}
          className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Prix"
        />

        <button
          type="button"
          className="bg-black md:w-[20vw] md:mx-auto hover:bg-red-600 hover:text-white text-white p-3 rounded-lg"
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default Compare;
