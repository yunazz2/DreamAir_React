import React, { useContext, useEffect, useState } from 'react';
import SeatRt from '../../components/booking/SeatRt';
import { useParams } from 'react-router-dom';
import Header from '../../components/fragment/Header';
import Footer from '../../components/fragment/Footer';
import * as bookingjs from '../../apis/booking';
import { BookingContext } from '../../contexts/BookingContextProvider';

const SeatContainer = () => {
  const { booking, setBooking } = useContext(BookingContext);
  const [bookedList, setBookedList] = useState([]);
  const [bookingObject, setBookingObject] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 지금은 이렇게 하드코딩해서 테스트하지만, 추후 booking 객체에서 저장된 값을 뽑아야 함
        const flightNo = 5;
        const productNoDeps = 5;
        const pasCount = booking.pasCount;
        const roundTrip = booking.roundTrip;
        const passengerNames = booking.passengerNames;

        // 데이터 가져오기 전에 로딩 상태 설정
        setLoading(true);

        // booking 정보 설정
        setBooking(prevBooking => ({ ...prevBooking, flightNo, productNoDeps, pasCount, roundTrip, passengerNames }));

        // 좌석 현황 가져오기
        const bookingResponse = await bookingjs.selectSeatStatus({ ...booking, flightNo, productNoDeps, pasCount, roundTrip, passengerNames });
        const bookingData = bookingResponse.data;
        setBookingObject(bookingData);

        // 예매 완료된 좌석 현황 가져오기
        const bookedListResponse = await bookingjs.bookedSeatList(flightNo);
        const bookedListData = bookedListResponse.data;
        setBookedList(bookedListData);

        // 데이터 가져오는 작업 완료 후 로딩 상태 해제
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, [setBooking]);


  return (
    <>
      <Header />
      <SeatRt bookingObject={bookingObject} isLoading={isLoading} />
      <Footer />
    </>
  );
};


export default SeatContainer;
