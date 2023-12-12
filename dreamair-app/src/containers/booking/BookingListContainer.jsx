import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import BookingListForm from '../../components/booking/BookingListForm';
import * as bookingAPI from '../../apis/booking'
import { BookingContext } from '../../contexts/BookingContextProvider';

const BookingListContainer = () => {

  
  const {booking, setBooking} = useContext(BookingContext);
  console.log(booking.roundTrip);
  const [bookingList, setBookingList] = useState([]);
  const [roundTrip, setRoundTrip] = useState(booking.roundTrip)
  // const roundTrip = booking.roundTrip;
  const departure = booking.departure;
  const destination = booking.destination;
  const departureDate = booking.departureDate;
  const pasCount = booking.pasCount
  

  const bookingInfo = {
    roundTrip : roundTrip,
    departure : departure,
    destination : destination,
    departureDate : departureDate, 
    pasCount : pasCount    
  }
  
  const getBookingList = async () => {
    console.log("get");
    if (roundTrip === ('왕복 가는편' || '편도') ) {
      const response = await bookingAPI.goList(roundTrip, departure, destination, departureDate, pasCount );    
      const data = await response.data
      console.log("가는편 항공권 : " + data);
      setBookingList(data);
    } else if(booking.roundTrip === ('왕복')) {
      // console.log("if");
      // departure = booking.destination
      // destination = booking.departure
      // const response = await bookingAPI.comeList(roundTrip, departure, destination, departureDate, pasCount );    
      // const data = await response.data
      // console.log("오는편 항공권 : " + data);
      // setBookingList(data);
    }
  };

  useEffect(() => {
    getBookingList(roundTrip)
  },[roundTrip])

  return (
    <Container className="mt-5 py-3">
      <h1 className="text-center">항공권 조회</h1>
      <br />
      <div className="img_container text-center">
        <Image src="/img/searchTicket.png" alt="조회" />
      </div>
      <br />

      {/* 항공권 목록을 보여주는 섹션 */}
      <section>
        <BookingListForm bookingInfo={bookingInfo} bookingList={bookingList} setRoundTrip={setRoundTrip} />
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
