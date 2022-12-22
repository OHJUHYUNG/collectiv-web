import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import ProductList from './component/productList/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product/list" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
