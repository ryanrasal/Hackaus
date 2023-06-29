import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Recap() {
  const [scoresResult] = useState(JSON.parse(localStorage.getItem("scores")));
  const { score1, score2, score3 } = scoresResult;
  const total = score1 + score2 + score3;
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(4);
  const [maxScore] = useState(5);

  const percentage = (score / maxScore) * 100;

  const colorGradient =
    // eslint-disable-next-line no-nested-ternary
    percentage > 60 ? "green" : percentage > 30 ? "[#eab308]" : "red";

  useEffect(() => {
    if (total > "90" && total < "166") {
      setCategory("2-C");
    } else if (total > "165" && total < "255") {
      setCategory("3-B");
    } else if (total > "255" && total < "375") {
      setCategory("4-A");
    } else if (total > "375") {
      setCategory("5-P");
    } else {
      setCategory("1 - HC");
    }

    const newScore = parseInt(category.split("-")[0], 10);
    setScore(newScore);
  }, [category, total]);

  return (
    <div>
      <div className="flex justify-center w-full mb-12">
        <div className="w-64 h-64 bg-[#002743] flex flex-col mt-[122px]  rounded-full  text-center p-10  ">
          <div className="text-white text-2xl">Catégorie</div>
          <div className="text-white text-6xl font-bold mt-10">{category}</div>
        </div>

        <div className="absolute top-44">
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
        <div className="rounded-full h-12 w-12 bg-[#00ACB0] flex items-center justify-center">
          {scoresResult.score3}
          {/* {antutuScore} */}
        </div>
        <div className="rounded-full h-12 w-12 bg-[#00ACB0] flex items-center justify-center">
          {scoresResult.score1} {/* {ramScore} */}
        </div>
        <div className="rounded-full h-12 w-12 bg-[#00ACB0] flex items-center justify-center">
          {scoresResult.score2}
          {/* {stockageScore} */}
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
