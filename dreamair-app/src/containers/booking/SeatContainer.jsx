import React, { useContext, useEffect, useState } from 'react';
import Seat from '../../components/booking/Seat';
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
        const productNoDeps = booking.productNoDep;
        const pasCount = booking.pasCount;
        const roundTrip = booking.roundTrip;
        const passengerNames = booking.passengerNames;

        // 데이터 가져오기 전에 로딩 상태 설정
        setLoading(true);
       
        // 좌석 현황 가져오기
        const bookingResponse = await bookingjs.selectDepSeatStatus({ ...booking, productNoDeps, pasCount, roundTrip, passengerNames });
        const bookingData = bookingResponse.data;
        setBookingObject(bookingData);

        const goFlightNo = bookingData.booking.goFlightNo;

        // booking 정보 설정
        setBooking(prevBooking => ({ ...prevBooking, productNoDeps, pasCount, roundTrip, passengerNames, goFlightNo }));
        
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
      <Seat bookingObject={bookingObject} isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default SeatContainer;
