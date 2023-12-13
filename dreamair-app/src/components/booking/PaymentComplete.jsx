import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BookingContext } from '../../contexts/BookingContextProvider';

const PaymentComplete = ({ isAuthenticated }) => {
  // context 해제하기
  const {booking, setBooking} = useContext(BookingContext)

  return (
    <Container className="w-100 text-center">
      <i className="fa-regular fa-circle-check"></i>
      <h1 className="text-center my-3">결제가 완료되었습니다.</h1>

      {/* 회원 */}
      {isAuthenticated && (
        <Row>
          <Col>
            <h3>예매 번호: DA0000{booking.bookingNo}</h3>
          </Col>
        </Row>
      )}

      {/* 비회원 */}
      {!isAuthenticated && (
        <Row>
          <Col>
            <h3>예매 번호: DA0000{booking.bookingNo2}</h3>
          </Col>
        </Row>
      )}

    </Container>
  );
};

export default PaymentComplete;
