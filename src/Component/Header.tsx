import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  rightText: string;
  centerText: string;
}

// type resultProps = {
//   title: string;
//   id: number;
// };

export function Header(head: HeaderProps) {
  //   const [result, setResult] = useState<resultProps[]>([]);

  //   useEffect(() => {
  //     const api = async () => {
  //       const data = await fetch('/data/sample.json', {
  //         method: 'GET',
  //       });
  //       const jsonData = await data.json();
  //       setResult(jsonData.results);
  //     };
  //     api();
  //   }, []);

  return (
    <>
      <div className="Wrapper">
        <div className="logo">
          <img className="img" src="/images/sample.png" alt="logo이미지" />
        </div>
        <div className="title">
          {SAMPLEDATA.map((menu) => {
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

const SAMPLEDATA = [
  {
    id: 1,
    title: '홈',
  },
  {
    id: 2,
    title: '둘러보기',
  },
  {
    id: 3,
    title: '판매하기',
  },
  {
    id: 4,
    title: '다운로드',
  },
];
