import React, { useEffect, useState } from 'react'
import SeatRt from '../../components/booking/SeatRt'
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/fragment/Header';
import Footer from '../../components/fragment/Footer';
import * as bookingjs from '../../apis/booking'

const SeatRtContainer = () => {

  const { pasCount, roundTrip } = useParams();
  const [bookedList, setBookedList] = useState([]);
  const [bookingObject, setBookingObject] = useState([]);
  const [isLoading, setLoading] = useState(true)
  
  const location = useLocation();
  const seatPageInfo = { ...location.state };
  
  const flightNo = 5; // 테스트를 위해 임시 값 세팅

  // 테스트를 위해 임의로 부킹 객체 생성
  const booking = {
    pasCount : pasCount,
    productNoDeps : 5,
  }

  // 항공기 번호로 좌석 불러오기
  const getBookingObject = async () => {
    setLoading(true)
    const response = await bookingjs.selectSeatStatus(booking);
    const data = response.data;
    console.log(data);
    setBookingObject(data);
    setLoading(false)
  }

  // 예매 완료된 좌석 확인
  const getBookedList = async () => {
    const response = await bookingjs.bookedSeatList(flightNo);
    const data = response.data;
    console.log(data);
    setBookedList(data);
  }

  useEffect(() => {
    setLoading(true);
    getBookingObject();
    getBookedList();
    setLoading(false);

    // 10초마다 getBookingObject 함수 실행
    const interval = setInterval(() => {
      getBookingObject();
    }, 10000);

    // 컴포넌트가 언마운트될 때 interval을 클리어하여 메모리 누수 방지
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <SeatRt pasCount={pasCount} roundTrip={roundTrip} bookingObject={bookingObject} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default SeatRtContainer