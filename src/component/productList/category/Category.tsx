import React, { useEffect, useState } from "react";
import "./Category.css";
import axios from "axios";

interface CategoryProps {
  id: number;
  title: string;
}

interface Category {
  categoryTitle: string;
}

export function Category() {
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
        <div className="leftSide">
          <div className="categoryWrapper">
            <div className="categoryTitle">카테고리</div>
            {isData.map((data) => {
              return (
                <div className="category" key={data.id}>
                  {data.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
