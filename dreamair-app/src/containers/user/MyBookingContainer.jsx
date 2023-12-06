import React, { useEffect, useState } from 'react'
import * as users from '../../apis/user'
import MyBooking from '../../components/user/MyBooking'
import { useParams } from 'react-router-dom'

const MyBookingContainer = () => {
  
  const {userId} = useParams();

  // ⭐ state 설정
  const [bookingList, setBookingList] = useState([])

  
  // ✔ 예매 목록 데이터
  const getBookingList = async () => {
    const response = await users.selectBookingListByUser(userId);
    const data = await response.data;
    console.log(data);
    setBookingList(data);
  };

  useEffect(() => {
    getBookingList();
  }, [])
  
  return (
    <>
      <MyBooking bookingList={bookingList}/>
    </>
  )
}

export default MyBookingContainer