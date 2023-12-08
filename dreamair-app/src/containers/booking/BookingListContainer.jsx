import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import BookingListForm from '../../components/booking/BookingListForm';
import * as booking from '../../apis/booking'

const BookingListContainer = () => {
  
  const [roundTrip, setRoundTrip] = useState('편도');
  const [departure, setDeparture] = useState('김포');
  const [destination, setDestination] = useState('제주');
  const [departureDate, setDepartureDate] = useState('2023/11/22');
  const [pasCount, setPasCount] = useState(1);
  const [bookingList, setBookingList] = useState([]);

  // 인덱스 페이지에서 받아와야할 값 
  const bookingInfo = {
    roundTrip : roundTrip,
    departure : departure,
    destination : destination,
    departureDate : departureDate, 
    pasCount : pasCount    
  }
      
  const getBookingList = async () => {
    const response = await booking.list(roundTrip, departure, destination, departureDate, pasCount );    
    const data = await response.data
    console.log(data);
    setBookingList(data);
  };

  useEffect(() => {
    getBookingList()
  },[])

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

      {/* 항공권 목록을 보여주는 섹션 */}
      <section id="goWay">
        <BookingListForm bookingInfo={bookingInfo} bookingList={bookingList} />
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
