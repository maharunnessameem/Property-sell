import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";

import { HelmetProvider } from "react-helmet-async";



// import { getTodos, postTodo } from "../my-api";

// Create a client


ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
);
