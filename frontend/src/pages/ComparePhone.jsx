import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import PdfGenerator from "../components/PdfGenerator";

export default function ComparePhone() {
  const signatureRef = useRef();

  const [signatureImage, setSignatureImage] = useState(null);

  const [dataPhoneRef, setDataPhoneRef] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    state: "",
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

  const telephone = [
    {
      brand: dataPhoneRef.brand,
      model: dataPhoneRef.model,
      ram: dataPhoneRef.ram,
      storage: dataPhoneRef.storage,
      state: dataPhoneRef.state,
      price: dataPhoneRef.price,
    },
  ];

  const handleGeneratePdf = () => {
    const image = signatureRef.current.toDataURL();
    setSignatureImage(image);
  };

  return (
    <div className="flex flex-wrap md:flex-col md:w-[70vw] md:mx-auto justify-center mt-6">
      <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
        Informations du Téléphone
      </h2>
      <div className="flex flex-col md:mx-auto">
        {selects.map((select) => (
          <select
            key={select.name}
            name={select.name}
            value={dataPhoneRef[select.name]}
            onChange={onChange}
            className="w-80 md:w-60 my-2 rounded-md placeholder:text-gray-300 border border-primary md:mx-2 py-2 pl-4 text-lg placeholder-black"
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
          className="w-80 md:w-60 md:mx-2 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Modèle"
        />

        <input
          type="text"
          onChange={onChange}
          name="price"
          value={dataPhoneRef.price}
          className="w-80 md:w-60 md:mx-2 my-2 rounded-md placeholder:text-gray-300 border border-primary py-2 pl-4 text-lg placeholder-black"
          placeholder="Prix"
        />
        <button
          type="button"
          className="bg-black md:w-[20vw] text-xl md:mx-auto mb-4 hover:bg-red-600 hover:text-white text-white p-3 rounded-lg"
        >
          Comparer
        </button>
        <button type="button" onClick={handleGeneratePdf}>
          Générer PDF et capturer la signature
        </button>
        <div className="h-20 w-20 bg-green-600">
          <PdfGenerator
            telephone={telephone[0]}
            signatureImage={signatureImage}
          />
        </div>
        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            width: 200,
            height: 100,
            className: "signature-canvas border-2 border-black",
          }}
        />
      </div>
    </div>
  );
}
