import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryProps } from "../ProductList";
import "./Product.css";

interface ProductData {
  id: number;
  userImg: string;
  userId: string;
  time: number;
  productName: string;
  productImg: string;
  quantity: number;
  sub: string;
  price: number;
  watch: number;
  like: number;
  kind: number;
}

export function Product({ isData }: { isData: CategoryProps[] }): JSX.Element {
  const [isProduct, setIsProduct] = useState<ProductData[]>([]);

  function productData() {
    axios
      .get("/data/product.json", {})
      .then((resultData) => {
        setIsProduct(resultData.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    productData();
  }, []);

  // function clickCategory() {
  //   return;
  //   if ()
  // }

  return (
    <>
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
                {item.quantity === 0 ? (
                  <div className="image">
                    <img
                      className="soldOut"
                      src={item.productImg}
                      alt="product"
                      placeholder="SOLD"
                    />
                    <div className="textSold">SOLD</div>
                  </div>
                ) : (
                  <div className="image">
                    <img
                      className="productImg"
                      src={item.productImg}
                      alt="product"
                    />
                  </div>
                )}
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
    </>
  );
}

export default Product;
