import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import ProductList from "./component/productList/ProductList";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
    /*
    @todo exact오류  router-dom version 문제일듯함
    */
  );
}

export default App;
