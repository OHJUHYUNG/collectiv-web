import React, { useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { idText } from "typescript";
import ProductContainer from "../product/ProductContainer";
import { CCategories, CCategory } from "../ProductList";
import "./Category.css";

type CategoryProps = {
  categories: CCategories;
  onClickCategory(cID: number): void;
};

export function Category(props: CategoryProps): JSX.Element {
  const { categories, onClickCategory } = props;

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
            {categories.map((category: CCategory) => {
              return (
                <div
                  className="category"
                  key={category.id}
                  onClick={() => {
                    onClickCategory(category.id);
                  }}
                >
                  {category.title}
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
