import React, { useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { idText } from "typescript";
import ProductContainer, { ProductData } from "../product/ProductContainer";
import { CategoryProps } from "../ProductList";
import "./Category.css";

export function Category({ isData }: { isData: CategoryProps[] }): JSX.Element {
  const [selectedId, setSelectedId] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { cate_id } = useParams();

  function handleBtn(id: number & string) {
    setSelectedId(id);
  }
  // const category = isData[0];

  // console.log(category);
  return (
    <>
      <div className="contentWrapper">
        <div className="leftSide">
          <div className="categoryWrapper">
            <div className="categoryTitle">카테고리</div>
            {isData.map((data) => {
              return (
                <div
                  className="category"
                  key={data.id}
                  onClick={() => {
                    console.log(data.id);
                  }}
                >
                  {data.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ProductContainer />
    </>
  );
}

export default Category;
