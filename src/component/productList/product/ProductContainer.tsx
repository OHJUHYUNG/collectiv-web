import React, { useEffect, useState } from "react";
import "./ProductContainer.css";
import { getProduct, ProductData } from "../../../Api";
import { Link } from "react-router-dom";

type ProductContainerProps = {
  cID: number;
};

export function ProductContainer(props: ProductContainerProps): JSX.Element {
  const { cID } = props;
  const [isProduct, setIsProduct] = useState<ProductData[]>([]);

  async function productData() {
    return await getProduct(cID);
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
              <Link
                to={`/product/detail/${item.id}`}
                className="link"
                key={item.id}
              >
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
              </Link>
              <div className="bottomWrapper">
                <Link
                  to={`/product/detail/${item.id}`}
                  className="link"
                  key={item.id}
                >
                  <div className="productInfo">
                    <div className="productTitle">{item.productName}</div>
                    <div className="productSub">{item.sub}</div>
                    <div className="productPrice">
                      {item.price.toLocaleString()}원
                    </div>
                  </div>
                </Link>
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
