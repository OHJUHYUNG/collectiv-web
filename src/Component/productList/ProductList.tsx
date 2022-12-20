import React, { useEffect, useState } from 'react';
import './ProductList.css';
import axios from 'axios';

interface CategoryProps {
  id: number;
  title: string;
}

interface Category {
  categoryTitle: string;
}

interface Product {
  id: number;
  userImg: string;
  userId: string;
  time: number;
  productName: string;
  productImg: string;
  sub: string;
  price: number;
  watch: number;
  like: number;
}

export function ProductList(menu: Category, product: Product) {
  const [isData, setIsData] = useState<CategoryProps[]>([]);
  const [isProduct, setIsProduct] = useState<Product[]>([]);

  function fetchData() {
    axios
      .get('/data/category.json', {})
      .then((result) => {
        setIsData(result.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function productData() {
    axios
      .get('/data/product.json', {})
      .then((resultData) => {
        setIsProduct(resultData.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    productData();
  }, []);
  return (
    <>
      <div className="contentWrapper">
        <div className="leftSide">
          <div className="categoryWrapper">
            <div className="categoryTitle">{menu.categoryTitle}</div>
            {isData.map((data) => {
              return (
                <div className="category" key={data.id}>
                  {data.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="listWrapper">
          {isProduct.map((item) => {
            return (
              <div className="productWrapper" key={item.id}>
                <div className="userInfo">
                  <div className="userId">
                    <img className="userImg" src={item.userImg} alt="user" />
                    {item.userId}
                  </div>
                  <div className="time">{item.time}분 전</div>
                </div>
                <div className="thumbnail">
                  <img
                    className="productImg"
                    src={item.productImg}
                    alt="product"
                  />
                </div>
                <div className="bottomWrapper">
                  <div className="productInfo">
                    <div className="productTitle">{item.productName}</div>
                    <div className="productSub">{item.sub}</div>
                    <div className="productPrice">
                      {item.price.toLocaleString()}원
                    </div>
                  </div>
                  <div className="watchLike">
                    <div className="watch">
                      <img src="/images/see.png" className="see" alt="watch" />
                      {item.watch}
                    </div>
                    <div className="like">
                      <img
                        className="heart"
                        src="/images/heart.png"
                        alt="heart"
                      />
                      {item.like}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
