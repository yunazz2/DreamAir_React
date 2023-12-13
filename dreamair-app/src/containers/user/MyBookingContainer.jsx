import React, { useEffect, useState } from 'react'
import * as userjs from '../../apis/user'
import MyBooking from '../../components/user/MyBooking'
import { useParams } from 'react-router-dom'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

const MyBookingContainer = () => {
  
  const {userId} = useParams();

  // ⭐ state 설정
  const [bookingList, setBookingList] = useState([])

  
  // ✔ 예매 목록 데이터
  const getBookingList = async () => {
    const response = await userjs.selectBookingListByUser(userId);
    const data = await response.data;
    console.log(data);
    setBookingList(data);
  };

  useEffect(() => {
    getBookingList();
  }, [])
  
  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <MyBooking bookingList={bookingList}/>
      </div>
      <Footer />
    </>
  )
}

export default MyBookingContainer