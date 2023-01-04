import React, { useEffect, useState } from "react";
import { Category } from "./category/Category";
import { ProductContainer } from "./product/ProductContainer";
import axios from "axios";
import "./ProductList.css";

export type CCategory = {
  id: number;
  title: string;
};

export type CCategories = CCategory[];

export function ProductList() {
  const [categories, setCategories] = useState<CCategories>([]);
  const [clickedCategory, setClickedCategory] = useState<number>(1);

  function fetchData() {
    axios
      .get("/data/category.json", {})
      .then((result) => {
        setCategories(result.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function onClickCategory(cID: number) {
    setClickedCategory(cID);
  }

  return (
    <>
      <div className="contentWrapper">
        <Category categories={categories} onClickCategory={onClickCategory} />
        <ProductContainer cID={clickedCategory} />
      </div>
    </>
  );
}

export default ProductList;
