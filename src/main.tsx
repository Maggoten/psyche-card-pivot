import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// 🧩 Lägg in BrowserRouter med basename för GitHub Pages
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/psyche-card-pivot">
    <App />
  </BrowserRouter>
);
