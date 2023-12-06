import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import FinalCheck from '../../components/admin/FinalCheck'
import * as QR from '../../apis/qr'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FinalCheckContainer = () => {
    
  const {ticketNo} = useParams();
  const [pasTicketList, setPasTicketList] = useState([]);

  const getPasTicketList = async() => {
    const response = await admin.pas_ticketList(ticketNo);
    const data = await response.data;
    console.log(data);
    setPasTicketList(data);
  } 
  
  useEffect(() => {
    getPasTicketList();
}, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
      <Adminsidebar/>
      <FinalCheck pasTicketList={pasTicketList}/>  
    </div>
    <Adminfooter/> 
    </>
  )
}

export default FinalCheckContainer