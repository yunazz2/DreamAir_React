import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import BookingList from '../../components/admin/BookingList';

const BookingListContainer = () => {

  const [bookingList, setBookingList] = useState([]);

  const getBookingList = async () => {
    const response = await admin.booking_list(); 
    const data = await response.data;
    console.log(data);
    setBookingList(data);
  };

  useEffect(() => {
    getBookingList();
}, [])


return (<BookingList bookingList = {bookingList}></BookingList>)
}

export default BookingListContainer