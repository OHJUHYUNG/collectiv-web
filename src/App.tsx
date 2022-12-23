import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header";
import ProductList from "./component/productList/ProductList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/list" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
