import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import PdfGenerator from "../components/PdfGenerator";

export default function ComparePhone() {
  const signatureRef = useRef();

  const [signatureImage, setSignatureImage] = useState(null);

  const dataPhoneRef = [];
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
  const [showButtonSignature, setShowButtonSignature] = useState(true);

  const handleGeneratePdf = () => {
    const image = signatureRef.current.toDataURL();
    setSignatureImage(image);
    setShowButtonSignature(false);
  };

  return (
    <div className="flex flex-col md:w-[70vw] px-10 md:mx-auto justify-center mt-6">
      <div className="flex flex-col md:mx-auto">
        <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
          Signature
        </h2>
      </div>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{
          width: 200,
          height: 100,
          className:
            "signature-canvas border-2 md:h-[20vh] md:w-[50vw] md:mx-auto border-black mb-4",
        }}
      />

      {showButtonSignature && (
        <button
          className=" w-[70%] text-center mb-4 text-white mx-auto p-3 rounded-lg bg-green-600"
          type="button"
          onClick={handleGeneratePdf}
        >
          Valider la signature
        </button>
      )}
      <div className=" w-[70%] text-center mx-auto p-3 rounded-lg bg-green-600 ">
        <PdfGenerator
          telephone={telephone[0]}
          signatureImage={signatureImage}
        />
      </div>
    </div>
  );
}
