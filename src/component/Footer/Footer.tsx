import "./Footer.css";
import "../../reset.css";

interface FooterProps {
  wrapper: string;
}

const Footer = (foot: FooterProps) => {
  return (
    <footer className="footerWrapper">
      <section className="leftContents">
        <div className="serviceCenter">고객센터</div>
        <div className="operatingTimeInfo">
          <div className="operatingTime">
            운영시간: 평일 11:00 - 20:00 (토, 일, 공휴일 휴무)
          </div>
          <div className="lunchTime">점심시간: 평일 12:00 - 13:00</div>
        </div>
        <button className="oneOnOneBox">
          <p className="oneOnOneText">1:1 문의</p>
        </button>
        <div className="faqAndTips">
          <div className="faq">자주 묻는 질문</div>
          <div className="usefulTips">서비스 이용 방법</div>
        </div>
        <div className="termsOfUse">이용약관</div>
        <div className="privacyStatement">개인정보 처리 방침</div>
      </section>

      <section className="rightContents">
        <div className="bottomLogo" />
        <div className="companyInfo">
          <p>크레이빙콜렉터 주식회사┃대표이사: 이은비</p>
          <p>사업자등록번호: 726-87-01816 사업자 정보 확인</p>
          <p>통신판매업: 제 2020-서울관악-2616</p>
          <p>사업자 주소지: 서울시 강남구 논현로 75길 8, 4F</p>
          <p>HP: 070-4517-0522</p>
          <p>Email: support@cravingcollector.com</p>
        </div>
        <div className="terms">
          <p>
            크레이빙콜렉터(주)는 통신판매 중개자로서 중고 거래 마켓 콜렉티브의
            거래 당사자가 아니며, 개별
          </p>
          <p>판매자가 등록한 상품 정보 및 거래에 대해 책임을 지지 않습니다.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
