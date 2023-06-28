import React from "react";

function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner" />
      <p className="loading-text text-white text-xl">Connexion en cours...</p>
    </div>
  );
}

export default Loading;
