import React, { useEffect, useState } from 'react'
import * as userjs from '../../apis/user'
import MyBooking from '../../components/user/MyBooking'
import { useParams } from 'react-router-dom'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

const MyBookingContainer = () => {
  
  // const {userId} = useParams();
  const userId = sessionStorage.getItem('userId'); // 세션에서 userId를 가져옴

  // ⭐ state 설정
  const [bookingList, setBookingList] = useState([]);
  const [guestBookingList, setGuestBookingList] = useState([]); // 비회원 조회 데이터를 저장할 상태
  
  // ✔ 예매 목록 데이터 - 회원
  const getBookingList = async () => {
    const response = await userjs.selectBookingListByUser(userId);
    const data = await response.data;
    console.log(data);
    setBookingList(data);
  };

  // ✔ 예매 목록 데이터 - 비회원
  const getGuestBookingList = async (phone, userPw) => {
    const response = await userjs.selectBookingListByGuest(phone, userPw);
    const data = await response.data;
    console.log(data);
    setGuestBookingList(data);
  }

  useEffect(() => {
    getBookingList();
  }, [])
  
  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <MyBooking bookingList={bookingList} getGuestBookingList={getGuestBookingList} guestBookingList={guestBookingList} />
      </div>
      <Footer />
    </>
  )
}

export default MyBookingContainer