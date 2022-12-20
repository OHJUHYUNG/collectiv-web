import React from 'react';
import Header from './Component/Header';
import ProductList from './Component/productList/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          title=""
          rightText="FILL IN YOUR VALUE"
          centerText=" 안전 결제 수수료 0원, 판매자 추가 정산 이벤트중"
        />
      </header>
      <ProductList
        categoryTitle="카테고리
      "
      />
    </div>
  );
}

export default App;
