import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PaymentComplete = ({ isAuthenticated, bookingNo, bookingNo2 }) => {
  return (
    <Container className="w-100 text-center">
      <i className="fa-regular fa-circle-check"></i>
      <h1 className="text-center my-3">결제가 완료되었습니다.</h1>

      {/* 회원 */}
      {isAuthenticated && (
        <Row>
          <Col>
            <h3>예매 번호: DA0000{bookingNo}</h3>
          </Col>
        </Row>
      )}

      {/* 비회원 */}
      {!isAuthenticated && (
        <Row>
          <Col>
            <h3>예매 번호: DA0000{bookingNo2}</h3>
          </Col>
        </Row>
      )}

    </Container>
  );
};

export default PaymentComplete;
