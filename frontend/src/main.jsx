import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PhoneScoreContextProvider } from "./context/PhoneScoreContext";
import Routes from "./index";

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <PhoneScoreContextProvider>
      <RouterProvider router={router} />
    </PhoneScoreContextProvider>
  </StrictMode>
);
