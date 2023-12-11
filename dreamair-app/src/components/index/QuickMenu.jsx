import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuickMenu = () => {
  return (
    <section id="Quick">
      <div className="quick_container">
      <div className="btn_search_box">
            <div className="btn_search btn_search1">
              <Link href="#"><img src="/img/ticket.png" alt="항공권 조회" />항공권 조회</Link>
            </div>
            <div className="btn_search btn_search2">
              <Link href="#"><img src="/img/booking.png" alt="예약 조회" />예약 조회</Link>
            </div>
            <div className="btn_search btn_search3">
              <Link href="#"><img src="/img/Checkin.png" alt="체크인"/>체크인</Link>
            </div>
            <div className="btn_search btn_search4">
              <Link href="#"><img src="/img/search.png" alt="출도착 조회" />출도착 조회</Link>
            </div>
            <div className="btn_search btn_search5">
              <Link href="#"><img src="/img/bus.png" alt="공항버스 예약" />공항버스 예약</Link>
            </div>
          </div>
      </div>
    </section>
  );
};

export default QuickMenu;
