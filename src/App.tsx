import React from "react";
import "./component/Footer/footer";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";

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
