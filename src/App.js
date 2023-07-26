import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./i18n"; //import this
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <div className="Feild">
          <label>{t("fname")}</label>
          <input type="text" name="fname" />
        </div>
        <div className="Feild">
          <label>{t("lname")}</label>
          <input type="text" name="lname" />
        </div>
        <div className="Feild">
        <label>{t("mobile")}</label>
          <input type="text" name="mobile" />
        </div>
        <div className="Feild">
        <label>{t("address")}</label>
          <input type="text" name="address" />
        </div>
        <div className="Feild">
        <label>{t("message")}</label>
          <input type="text" name="messge" />
        </div>
        <input type="submit" name="Save" />
      </header>
    </div>
  );
}

export default App;
