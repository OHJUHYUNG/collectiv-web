import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import ProductList from "./component/productList/ProductList";
import ProductDetail from "./pages/productDetail/productDetail";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
    /*
    @todo exact오류  router-dom version 문제일듯함
    */
  );
}

export default App;
