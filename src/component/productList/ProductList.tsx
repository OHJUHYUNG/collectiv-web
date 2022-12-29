import React, { useEffect, useState } from "react";
import { Category } from "./category/Category";
import { Product } from "./product/Product";
import axios from "axios";
import "./ProductList.css";

export interface CategoryProps {
  id: number;
  title: string;
  isData: [{ id: number; title: string }];
}

export function ProductList() {
  const [isData, setIsData] = useState<CategoryProps[]>([]);

  function fetchData() {
    axios
      .get("/data/category.json", {})
      .then((result) => {
        setIsData(result.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="contentWrapper">
        <Category isData={isData} />
        <Product isData={isData} />
      </div>
    </>
  );
}

export default ProductList;
