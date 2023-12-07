import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import FinalCheck from '../../components/admin/FinalCheck'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FinalCheckContainer = () => {
    
  const {ticketNo} = useParams();
  const [ticket, setTicket] = useState([]);
  // const [pasTicketList, setPasTicketList] = useState([]);

  const getTicket = async() => {
    try{
      const response = await admin.pas_ticketList(ticketNo);
      const data = response.data
      console.log(data);
      console.log('★★★★★★★★★★ pas_ticketList');
      console.log('ticketNo' + ticketNo);
      console.log('pas_ticketList' + data);
      setTicket(data);
    } catch(e) {
      console.log(e);
    }
  }
  // const getPasTicketList = async(ticketNo) => {
  //   const response = await admin.pas_ticketList(ticketNo);
  //   const data = await response.data;
  //   console.log(data);
  //   console.log('★★★★★★★★★★ pas_ticketList');
  //   console.log('ticketNo' + ticketNo);
  //   console.log('pas_ticketList' + data);
  //   setPasTicketList(data);
  // } 
  
  useEffect(() => {
    getTicket();
}, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
      <Adminsidebar/>
      <FinalCheck ticketNo={ticketNo} ticket={ticket} />  
    </div>
    <Adminfooter/> 
    </>
  )
}

export default FinalCheckContainer