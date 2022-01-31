import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BudgetsProvider } from "./contexts/BudgetsContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </StrictMode>,
  rootElement
);
