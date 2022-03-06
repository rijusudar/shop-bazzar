import React from "react";
import "./App.css";

import Header from "./components/Layout/Header/Header";
import MainContent from "./components/Layout/MainContent/MainContent";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
