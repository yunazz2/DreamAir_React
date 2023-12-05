import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import FinalCheck from '../../components/admin/FinalCheck'
import * as QR from '../../apis/qr'

const FinalCheckContainer = () => {
  const navigate = useNavigate()

  const [ticketNo, setTicketNo] = useParams();
  const ticketList = async(ticketNo) => {
    const response = await admin.pas_ticketList(ticketNo);
    const data = await response.data;
    console.log(data);
  } 
  
  // const getPasTicketList = async () => {
  //   const response = await admin.pas_ticketList(ticketNo); 
  //   const data = await response.data;
  //   console.log(data);

  //   navigate('/admin/Final_check')
  // };

  useEffect(() => {
    ticketList();
}, [])

  return (<FinalCheck ticketList={ticketList}
                      QR={QR}
                      ticketNo={ticketNo}/>  )
}

export default FinalCheckContainer