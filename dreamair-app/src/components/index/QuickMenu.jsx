import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const QuickMenu = () => {
  return (
    <section id="Quick">
      <Container>
        <div className="quick_container">
          <Row>
            <Col>
              <div className="wrap">
                <a href="#">
                  <img src="/img/seat.png" alt="좌석선택" />
                </a>
                <h3>사전 좌석</h3>
              </div>
            </Col>

            <Col>
              <div className="wrap">
                <a href="/user/checkin">
                  <img src="/img/Checkin.png" alt="체크인" />
                </a>
                <h3>체크인</h3>
              </div>
            </Col>

            <Col>
              <div className="wrap">
                <a href="/board/list">
                  <img src="/img/community.png" alt="커뮤니티" />
                </a>
                <h3>커뮤니티</h3>
              </div>
            </Col>

            <Col>
              <div className="wrap">
                <a href="/bus">
                  <img src="/img/bus.png" alt="공항버스 예약" />
                </a>
                <h3>공항 버스 예약</h3>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default QuickMenu;
