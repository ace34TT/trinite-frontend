import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Favicon from "react-favicon";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import "./configs/i18n";
import "./assets/font/SourceSerifVariable-Roman.otf";
import { Helmet } from "react-helmet";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let persistor = persistStore(store);
root.render(
  <div className="dark:bg-black bg-white">
    <Helmet>
      <link
        rel="preload"
        href="./assets/font/Hiragino Kaku Gothic StdN W8.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
    </Helmet>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Favicon url="https://i.ibb.co/XYzgp01/image-63.png" />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
