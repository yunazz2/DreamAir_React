import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as userjs from '../../apis/user'
import TicketInfo from '../../components/booking/TicketInfo';

const TicketInfoContainer = () => {

  const { ticketNo } = useParams();

  const [viewTicketDetail, setViewTicketDetail] = useState([]);

  const getViewTicektDetail = async () => {
    try {
      const response = await userjs.viewTicket(ticketNo);
      const data = response.data
      console.log(data);
      setViewTicketDetail(data);
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getViewTicektDetail();
  }, [])

  return (
    <>
      <TicketInfo ticketNo={ticketNo} viewTicketDetail={viewTicketDetail} />
    </>
  )
}

export default TicketInfoContainer