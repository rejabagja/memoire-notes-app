import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "@provider";
import App from "@app";

import "@styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
