import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductContainer.css";
import { useSearchParams } from "react-router-dom";
import { getProduct, ProductData } from "../../../Api";

type ProductContainerProps = {
  cID: number;
};

export function ProductContainer(props: ProductContainerProps): JSX.Element {
  const { cID } = props;

  const [isProduct, setIsProduct] = useState<ProductData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  async function productData() {
    return await getProduct(cID);
    // axios
    //   .get("/data/product.json", {})
    //   .then((resultData) => {
    //     setIsProduct(resultData.data);
    //   })
    //   .catch(console.error);
  }

  useEffect(() => {
    productData()
      .then((r) => {
        setIsProduct(r);
      })
      .catch();
  }, [cID]);

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

export default ProductContainer;
