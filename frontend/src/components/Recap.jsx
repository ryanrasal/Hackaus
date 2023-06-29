/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Recap() {
  const [category, setCategory] = useState("1-B");
  const [score, setScore] = useState(4);

  const [maxScore, setMaxScore] = useState(5);

  // eslint-disable-next-line no-unused-vars
  const handleCAtegory = () => {
    setCategory("2-A");
    setMaxScore(5);
  };

  const percentage = (score / maxScore) * 100;

  let colorGradient;
  if (percentage > 90) {
    colorGradient = "green";
  } else if (percentage > 60) {
    colorGradient = "#6be338";
  } else if (percentage > 30) {
    colorGradient = "#eab308";
  } else {
    colorGradient = "red";
  }

  useEffect(() => {
    const newScore = parseInt(category.split("-")[0], 10);
    setScore(newScore);
  }, [category]);

  return (
    <div className="h-[850px]">
      <div>
        <p>Système d'exploitation : </p>
        <p>RAM : </p>
        <p>Capacité de Stockage </p>
      </div>
      <div className="flex justify-around">
        <button
          type="button"
          className="w-auto border-2 border-black px-4 text-amber-300 bg-blue-950 rounded-lg"
        >
          Très Bon Etat
        </button>
        <button
          type="button"
          className="w-auto border-2 border-black px-4 text-amber-300 bg-blue-950 rounded-lg"
        >
          Câble de chargement
        </button>
      </div>
      <div className="flex justify-center w-full mb-12">
        <div className="w-64 h-64 bg-[#002743] flex flex-col mt-[125px]  rounded-full  text-center p-10  ">
          <div className="text-white text-2xl">Catégorie</div>
          <div className="text-white text-6xl font-bold mt-10">{category}</div>
        </div>

        <div className="absolute top-[280px]">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              rotation: 0.5,
              strokeLinecap: "butt",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: colorGradient,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="rounded-full h-12 w-12 text-white bg-[#00ACB0] flex items-center justify-center">
          45 {/* {antutuScore} */}
        </div>
        <div className="rounded-full h-12 w-12 text-white bg-[#00ACB0] flex items-center justify-center">
          90 {/* {ramScore} */}
        </div>
        <div className="rounded-full h-12 w-12 text-white bg-[#00ACB0] flex items-center justify-center">
          30 {/* {stockageScore} */}
        </div>
      </div>
      <h3 className="text-2xl mt-6 text-center font-bold">
        Prix de vente conseillé :{" "}
      </h3>
      <div className="flex justify-around mt-6">
        <button
          type="button"
          className="border-2 border-black font-bold h-12 w-auto px-4 rounded-full"
        >
          Retour
        </button>
        <button
          type="button"
          className="border-2 h-12 w-auto px-4 rounded-full text-white text-2xl bg-[#00ACB0] font-bold"
        >
          Ajouter au Stock
        </button>
      </div>
    </div>
  );
}

export default Recap;
// eslint-disable-next-line no-lone-blocks
{
  /*  <button
    type="button"
    onClick={() => setCategory("2-C")}
    className="w-20 h-10 bg-blue-600 border-"
  >
    2-C
  </button>
  <button type="button" onClick={handleCAtegory}>
    5-A
  </button> */
}
