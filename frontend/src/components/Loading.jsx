import React, { useEffect, useState } from "react";
import succes from "../assets/succes.gif";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="loading">
      {isLoading ? (
        <div className="flex flex-col justify-center">
          <div className="loading-spinner" />
          <p className="loading-text text-white text-xl">
            Connexion en cours...
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <img src={succes} className="rounded-full" alt="" />
        </div>
      )}
    </div>
  );
}

export default Loading;
