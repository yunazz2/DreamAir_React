import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as userjs from '../../apis/user'
import TicketInfo from '../../components/booking/TicketInfo';
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

const TicketInfoContainer = () => {

  const { ticketNo } = useParams();
  const userId = sessionStorage.getItem('userId');
  const [isLoading, setLoading] = useState(true)

  const [viewTicketDetail, setViewTicketDetail] = useState([]);

  const getViewTicektDetail = async () => {
    try {
      const response = await userjs.viewTicket(ticketNo, userId);
      const data = response.data
      console.log(data);
      setViewTicketDetail(data);
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setLoading(true)
    getViewTicektDetail();
    setLoading(false)
  }, [])

  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div className="user_container">
        <TicketInfo ticketNo={ticketNo} viewTicketDetail={viewTicketDetail} isLoading={isLoading} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TicketInfoContainer