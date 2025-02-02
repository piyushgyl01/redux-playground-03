import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";

import App from "./App";
import Nav from "./Nav";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Nav />
      <App />
    </Provider>
  </StrictMode>
);
