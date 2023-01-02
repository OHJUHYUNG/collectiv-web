import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Header.css";

interface resultProps {
  id: number;
  title: string;
}

export function Header() {
  const [isData, setIsData] = useState<resultProps[]>([]);

  function fetchData() {
    axios
      .get("/data/sample.json", {})
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
      <div className="wrapper">
        <div className="logo">
          <img className="img" src="/images/logo.png" alt="logo이미지" />
        </div>
        <div className="title">
          {isData.map((menu) => {
            return (
              <button className="menu" key={menu.id}>
                {menu.title}
              </button>
            );
          })}
        </div>
        <div className="right">
          <div className="rightText">FILL IN YOUR VALUE</div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomText">
          안전 결제 수수료 0원, 판매자 추가 정산 이벤트중
        </div>
      </div>
    </>
  );
}

export default Header;
