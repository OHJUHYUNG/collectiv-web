import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  rightText: string;
  centerText: string;
}

type resultProps = {
  id: number;
  title: string;
};

export function Header(head: HeaderProps) {
  const [isData, setIsData] = useState<resultProps[]>([]);

  function fetchData() {
    axios
      .get('/data/sample.json', {})
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
          <div className="rightText">{head.rightText}</div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomText">{head.centerText}</div>
      </div>
    </>
  );
}

export default Header;
