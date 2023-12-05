import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import BookingListForm from '../../components/booking/BookingListForm';

const BookingListContainer = () => {
  
  const [roundTrip, setRoundTrip] = useState('');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [pasCount, setPasCount] = useState(1);

  const booking = {
    roundTrip : roundTrip,
    departure : departure,
    destination : destination,
    departureDate : departureDate,
    pasCount : pasCount
  }
  
  return (
    <Container className="mt-5 py-3">
      <h1 className="text-center">항공권 조회</h1>
      <br />
      <div className="img_container text-center">
        <Image src="/img/searchTicket.png" alt="조회" />
      </div>
      <br />
      {/* 출발지 - 목적지를 보여주는 섹션 */}
      <section>
        <div id="flight_box">{/* 출발지 - 목적지를 보여주는 박스 */}</div>
      </section>

      {/* 이전날짜 다음날짜 목록을 보여줘서 해당날짜 항공권 목록을 보여주는 섹션(옵션) */}
      <section></section>

      {/* 항공권 목록을 보여주는 섹션 */}
      <section id="goWay">
        {/* <BookingListForm /> */}
      </section>

      {/* 오는편 */}
      <section id="comeWay">
        {/* <BookingListForm /> */}
      </section>

      <div className="d-flex justify-content-between">
        <Button href="/" variant="outline-primary" size="lg">
          메인으로 가기
        </Button>
      </div>
    </Container>
  );
};

export default BookingListContainer;
