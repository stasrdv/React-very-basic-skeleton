import React from "react";
import "./App.scss";
import Footer from "../footer/footer";
import Header from "../header/header";

const App = () => {
  return (
    <div className="main__wrapper">
      <Header />
      <div className="main__content"></div>
      <Footer />
    </div>
  );
};

export default App;
