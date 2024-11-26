import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa lo stile di Bootstrap
import "./assets/css/index.css"; // CSS personalizzato

// Monta l'app React sul div con id="root"
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
