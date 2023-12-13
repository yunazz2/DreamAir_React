import React, { useEffect, useState } from 'react'
import * as userjs from '../../apis/user'
import CheckIn from '../../components/user/CheckIn'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

const CheckInContainer = () => {

  const userId = sessionStorage.getItem('userId');
  const [ticketList, setTicketList] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getTicketList = async (ticketNo) => {
    try {
      const response = await userjs.selectTicketList(ticketNo, userId);
      
      console.log(response.data);
      setTicketList(response.data);
      setLoading(false);

    } catch (error) {

      // 오류 처리
      console.error('Error while fetching ticket list:', error);
      setLoading(false);
    }
  };
 
  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div className="user_container">
          <CheckIn getTicketList={getTicketList} ticketList={ticketList} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CheckInContainer