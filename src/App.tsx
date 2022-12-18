import React from "react";
import "./component/Footer/Footer";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <footer className="App-footer">
        <Footer wrapper="" />
      </footer>
    </div>
  );
}

export default App;
