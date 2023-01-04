import React from "react";
import { CCategories, CCategory } from "../ProductList";
import "./Category.css";

type CategoryProps = {
  categories: CCategories;
  onClickCategory(cID: number): void;
};

export function Category(props: CategoryProps): JSX.Element {
  const { categories, onClickCategory } = props;

  return (
    <>
      <div className="category">
        <div className="leftSide">
          <div className="categoryWrapper">
            <div className="categoryTitle">카테고리</div>
            {categories.map((category: CCategory) => {
              return (
                <button
                  className="category"
                  key={category.id}
                  onClick={() => {
                    onClickCategory(category.id);
                  }}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
