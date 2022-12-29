import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import ProductList from "./component/productList/ProductList";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
