import React, { useEffect, useState } from 'react'
import Seat from '../../components/booking/Seat'
import { useParams } from 'react-router-dom';
import Header from '../../components/fragment/Header';
import Footer from '../../components/fragment/Footer';
import * as bookingjs from '../../apis/booking'

const SeatContainer = () => {

  const { pasCount, roundTrip } = useParams();
  const [bookedList, setBookedList] = useState([]);
  const [bookingObject, setBookingObject] = useState([]);
  const flightNo = 1;
  const [isLoading, setLoading] = useState(true)

  // 테스트를 위해 임의로 부킹 객체 생성
  const booking = {
    pasCount : pasCount,
    productNoDeps : 1,
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
    setLoading(true)
    getBookingObject();
    getBookedList();
    setLoading(false)
  }, [])

  return (
    <>
      <Header />
      <Seat pasCount={pasCount} roundTrip={roundTrip} bookingObject={bookingObject} isLoading = {isLoading} />
      <Footer />
    </>
  )
}

export default SeatContainer