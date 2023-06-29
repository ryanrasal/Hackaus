/* eslint-disable react/button-has-type */
import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

function ManageRef() {
  const [phoneRef, setPhoneRef] = useState([]);
  const [editPhone, setEditPhone] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const [dataPhoneRef, setDataPhoneRef] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    state: "",
    img: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/phone-ref")
      .then((result) => {
        setPhoneRef(result.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [editPhone, editMode]);

  useEffect(() => {
    if (editPhone) {
      setDataPhoneRef({
        brand: editPhone.brand,
        model: editPhone.model,
        ram: editPhone.ram,
        storage: editPhone.storage,
        state: editPhone.state,
        img: editPhone.img,
        price: editPhone.price,
      });
    } else {
      setDataPhoneRef({
        brand: "",
        model: "",
        ram: "",
        storage: "",
        state: "",
        img: "",
        price: "",
      });
    }
  }, [editPhone, editMode]);

  const handleEdit = () => {
    axios
      .put(`http://localhost:5000/phone-ref/${editPhone.id}`, dataPhoneRef)
      .then(() => {
        setEditMode(false);
        setEditPhone(null);
        setDataPhoneRef({
          brand: "",
          model: "",
          ram: "",
          storage: "",
          state: "",
          price: "",
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  const handleDelete = (phone) => {
    axios
      .delete(`http://localhost:5000/phone-ref/${phone.id}`)
      .then(() => {
        axios.get("http://localhost:5000/phone-ref").then((result) => {
          setPhoneRef(result.data);
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPhoneRef((prevDataWine) => ({
      ...prevDataWine,
      [name]: value,
    }));
  };

  const handleEditMode = (phone) => {
    setEditMode(true);
    setEditPhone(phone);
  };
  const handleClick = (phone) => {
    setDataPhoneRef({
      brand: phone.brand,
      model: phone.model,
      ram: phone.ram,
      storage: phone.storage,
      state: phone.state,
      price: phone.price,
    });
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
    <div>
      {!editMode ? (
        <div>
          {phoneRef.map((phone) => (
            <div>
              <PhoneCard
                phone={phone}
                handleClick={handleClick}
                key={phone.id}
              />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={() => handleDelete(phone)}
              >
                Supprimer
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={() => handleEditMode(phone)}
              >
                Modifier
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
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
            className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
            placeholder="Modèle"
            onChange={onChange}
          />
          <input
            type="text"
            name="price"
            value={dataPhoneRef.price}
            className="w-80 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
            placeholder="Prix"
            onChange={onChange}
          />

          <button
            onClick={handleEdit}
            type="button"
            className="bg-black md:w-[20vw] md:mx-auto hover:bg-red-600 hover:text-white text-white p-3 rounded-lg"
          >
            Valider
          </button>
        </div>
      )}
    </div>
  );
}

export default ManageRef;
