import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import * as bookingjs from '../../apis/booking'
import TicketInfo from '../../components/booking/TicketInfo';

const TicketInfoContainer = () => {

  const { ticketNo } = useParams();

  const [booking, setBooking] = useState({});

  const getBooking = async () => {
    try {

    }
    catch (e) {

    }
  }

  return (
    <>
      <TicketInfo ticketNo={ticketNo} />
    </>
  )
}

export default TicketInfoContainer