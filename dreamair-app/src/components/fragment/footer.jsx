import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   
    <footer className="footer_container bottom-0">
    <hr />
    <div className="footer_link">
      <p className="float-end"><Link to="#">Back to Top</Link></p>
      <p className="float-start"><Link to="#">Privacy</Link> &middot; <Link to="#">Terms</Link></p>
    </div>

    <div className="footer_seciont1">
      <div className="logo"><img src="/img/logo_name.png" alt="로고이미지" /></div>
    </div>

    <div className="footer_section2">
      <div className="copy_content">
        <p>DreamAir는 항공사가 제공하는 개별 항공권을 판매하는 지위를 가지며, 해당상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
          항공권 또는 항공권이 포함된 경우, 표시되는 상품요금은 예상 유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동될 수 있습니다.
          DreamAir는 개별 판매자가 등록한 오픈마켓 상품에 대해서 DreamAir는 일체 책임을 지지 않습니다.</p>
        <br />
        <p className="copy"> Copyright (C) 2023 DreamAir All rights reserved.</p>
      </div>
    </div>
    
    <div className="footer_section3">
      <div className="sns d-flex">
        <span> <Link to="#"><img src="/img/facebook.png" alt="페이스북" /></Link></span>
        <span> <Link to="#"><img src="/img/instagram.png" alt="인스타그램" /></Link></span>
        <span> <Link to="#"><img src="/img/kakaotalk.png" alt="카카오톡" /></Link></span>
      </div>
    </div>
  </footer>
);
};

export default Footer