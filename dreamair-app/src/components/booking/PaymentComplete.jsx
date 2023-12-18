import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BookingContext } from '../../contexts/BookingContextProvider';
import { LoginContext } from '../../contexts/LoginContextProvider';

const PaymentComplete = () => {
  // context 해제하기
  const {booking, setBooking} = useContext(BookingContext)
  const {isLogin} = useContext(LoginContext)

  console.log("예매완료");
  console.log(booking);

  return (
    <Container className="w-100 text-center">
      <i className="fa-regular fa-circle-check"></i>
      <h1 className="text-center my-3">결제가 완료되었습니다.</h1>

      {!isLogin
      ?
      // 비 로그인
      <Row>
        <Col>
          <h3>예매 번호: DA0000{booking.bookingNo2}</h3>
        </Col>
      </Row>
      :
      // 로그인
      <Row>
        <Col>
          <h3>예매 번호: DA0000{booking.bookingNo}</h3>
        </Col>
      </Row>
      }

    </Container>
  );
};

export default PaymentComplete;
