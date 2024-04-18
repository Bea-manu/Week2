import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <body>
      <Weather />
      <script src="index.js"></script>
    </body>
    <App />
  </StrictMode>
);
