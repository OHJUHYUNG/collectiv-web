import * as React from "react";
import { Category } from "./category/Category";
import { Product } from "./product/Product";

import "./ProductList.css";

export function ProductList() {
  return (
    <>
      <div className="contentWrapper">
        <Category categoryTitle="카테고리" />
        <Product />
      </div>
    </>
  );
}

export default ProductList;
