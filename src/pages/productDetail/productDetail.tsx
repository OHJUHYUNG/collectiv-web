import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../common/Carousel";
import "./productDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ProductImage {
  url: string;
}

interface Product {
  id: number;
  productImages: ProductImage[];
  brandName: string;
  productTitle: string;
  topPrice: number;
  updateTime: number;
  watch: number;
  likes: number;
  size: string;
  detailSizeShoulder: number;
  detailSizeChest: number;
  detailSizeArm: number;
  detailSizeTotalLength: number;
  productCondition: string;
  bottomPrice: number;
  productComments: string;
}

interface SellerInfo {
  id: number;
  sellerImg: string;
  sellerName: string;
  sellersProducts: number;
  sellersTransactions: number;
  ratings: number;
}

// 이전 페이지에서 데이터 받아올 때
interface ProductDetailProps {
  // product: Product | null;
  id: number;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [seller, setseller] = useState<SellerInfo | null>(null);

  // const params = useParams();
  // const productId = params.id;

  function productData() {
    axios
      .all([
        axios.get("/data/productInfo.json"),
        axios.get("/data/sellerInfo.json"),
      ])
      .then(
        axios.spread((product: any, seller: any) => {
          setProduct(product.data);
          setProductImages(product.data.productImages);
          setseller(seller.data);
        })
      )
      .catch(console.error);
  }

  console.log(product);

  useEffect(() => {
    productData();
  }, []);

  return (
    <div className="productDetailWrapper">
      <div className="productDetailBox" key={product?.id}>
        <div className="productDetailLeft">
          <Carousel images={productImages} />
        </div>
        <div className="productDetailRight">
          <div className="productTitleTop">
            <div className="productTitleTopLeft">
              <div className="brandName">{product?.brandName}</div>
              <div className="productTitle">{product?.productTitle}</div>
              <div className="productTitlePrice">
                {product?.topPrice.toLocaleString()}원
              </div>
              <div className="updateTime">{product?.updateTime}분 전</div>
            </div>

            <div className="productTitleTopRight">
              <div className="shareBtn">
                <img
                  className="shareImage"
                  src="/images/share.png"
                  alt="shareImage"
                />
              </div>
              <div className="productStatus">
                <div className="watch">
                  <img
                    className="watchImage"
                    src="/images/watch.png"
                    alt="watchImage"
                  />
                  {product?.watch.toLocaleString()}
                </div>
                <div className="likes">
                  <img
                    className="likesImage"
                    src="/images/likes.png"
                    alt="likesImage"
                  />
                  {product?.likes.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="productInfoBox">
            <div className="productInfoTitle">상품 설명</div>
            <div className="productInfo">
              <div className="productSizeDetail">
                <div className="productSize">size: {product?.size}&nbsp;</div>
                <div className="detailSizeShoulder">
                  (어깨 {product?.detailSizeShoulder}&nbsp;
                </div>
                <div className="detailSizeChest">
                  가슴 {product?.detailSizeChest}&nbsp;
                </div>
                <div className="detailSizeArm">
                  팔길이 {product?.detailSizeArm}&nbsp;
                </div>
                <div className="detailSizeTotalLength">
                  총장 {product?.detailSizeTotalLength})
                </div>
              </div>
              <div className="productCondition">
                Condition: {product?.productCondition}
              </div>
              <div className="productPrice">
                Price: ₩{product?.bottomPrice.toLocaleString()}
              </div>
              <div className="productShipping">
                배송비+3,000원, 제주/산간 6,000원
              </div>
              <div className="productComments">{product?.productComments}</div>
            </div>
          </div>

          <div className="banner">
            <div className="bannerText">
              안전 결제 수수료 0원, 판매자 추가 정산 이벤트 중
            </div>
          </div>

          <div className="bottomBox">
            <div className="sellerInfoBox" key={seller?.id}>
              <div className="sellerInfoTitle">판매자 정보</div>
              <div className="sellerInfoDetail">
                <div className="sellerInfoDetailLeft">
                  <img
                    className="sellerImage"
                    src={seller?.sellerImg}
                    alt="sellerImage"
                  ></img>
                  <div className="sellerDetail">
                    <div className="sellerName">{seller?.sellerName}</div>
                    <div className="sellerInfo">
                      <div className="sellersProducts">
                        상품 수 {seller?.sellersProducts.toLocaleString()}개
                      </div>
                      <div className="sellersTransactions">
                        ∙ 거래수 {seller?.sellersTransactions.toLocaleString()}
                        개
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sellerInfoDetailRight">
                  <div className="sellerGrade">
                    <img
                      className="stars"
                      src="/images/star.png"
                      alt="stars"
                    ></img>
                    <img
                      className="stars"
                      src="/images/star.png"
                      alt="stars"
                    ></img>
                    <div className="sales">
                      ({seller?.ratings.toLocaleString()})
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="paymentBtnBox">
              <button className="paymentBtn">앱에서 안전하게 결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
