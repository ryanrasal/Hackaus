import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";

function Compare() {
  const [selectedPhone] = useState(
    JSON.parse(localStorage.getItem("selectedPhone"))
  );
  const [scores, setScores] = useState({ score1: 0, score2: 0, score3: 0 });
  const [dataPhoneRef, setDataPhoneRef] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    state: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPhoneRef((prevDataPhone) => ({
      ...prevDataPhone,
      [name]: value,
    }));
  };
  const handleClick = () => {
    const updatedScores = { ...scores }; // Create a copy of scores

    if (scores.score1 === 0) {
      switch (dataPhoneRef.ram) {
        case "1":
          updatedScores.score1 += 30;
          break;
        case "2":
          updatedScores.score1 += 40;
          break;
        case "3":
          updatedScores.score1 += 54;
          break;
        default:
          break;
      }
    }
    if (scores.score2 === 0) {
      switch (dataPhoneRef.storage) {
        case "16":
          updatedScores.score2 += 31;
          break;
        case "32":
          updatedScores.score2 += 45;
          break;
        case "64":
          updatedScores.score2 += 66;
          break;
        default:
          break;
      }
    }
    if (scores.score3 === 0) {
      switch (dataPhoneRef.state) {
        case "0":
          updatedScores.score3 += 40;
          break;
        case "1":
          updatedScores.score3 += 44;
          break;
        case "2":
          updatedScores.score3 += 49;
          break;
        default:
          break;
      }
    }
    localStorage.setItem("scores", JSON.stringify(updatedScores));
    setScores(updatedScores); // Update scores state with the updated scores
    navigate("/my-phone/recapitulatif");
  };

  const selects = [
    {
      name: "ram",
      label: "Mémoire",
      options: [
        { label: "1GB", value: "1" },
        { label: "2GB", value: "2" },
        { label: "3GB", value: "3" },
      ],
    },
    {
      name: "storage",
      label: "Stockage",
      options: [
        { label: "16GB", value: "16" },
        { label: "32GB", value: "32" },
        { label: "64GB", value: "64" },
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

        <button
          onClick={handleClick}
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
