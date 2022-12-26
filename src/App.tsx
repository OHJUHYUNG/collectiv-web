import React from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/Header";
import ProductDetails from "./pages/productDetails/productDetails";

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

      <ProductDetails />

      <footer className="App-footer">
        <Footer wrapper="" />
      </footer>
    </div>
  );
}

export default App;
