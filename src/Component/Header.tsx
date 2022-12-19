import { type } from '@testing-library/user-event/dist/type';
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

  useEffect(() => {
    const api = async () => {
      const data = await fetch('/data/sample.json', {
        method: 'GET',
      });
      const jsonData = await data.json();
      setIsData(jsonData);
    };
    api();
    // console.log(isData);
  }, []);

  return (
    <>
      <div className="Wrapper">
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
