import React, { useEffect, useState } from "react";
import { Category } from "./category/Category";
import { ProductContainer } from "./product/ProductContainer";
import axios from "axios";
import "./ProductList.css";

interface CategoryData {
  id: number;
  title: string;
}

export interface CategoryProps {
  id: number;
  title: string;
  isData: CategoryData[];
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
      </div>
    </>
  );
}

export default ProductList;
