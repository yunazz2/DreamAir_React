import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import PasTicketList from '../../components/admin/FinalCheck';

const FinalCheckContainer = () => {
  const navigate = useNavigate()

  const {ticketNo} = useParams();
  const [pasTicketList, SetPasTicketList] = useState([]);

  const getPasTicketList = async () => {
    const response = await admin.pas_ticketList(); 
    const data = await response.data;
    console.log(data);
    setPasTicketList(data);
  }

  useEffect(() => {
    getPasTicketList();
}, [])

  return (
    <div>FinalCheckContainer</div>
  )
}

export default FinalCheckContainer