import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import FinalCheck from '../../components/admin/FinalCheck'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FinalCheckContainer = () => {
    
  const {ticketNo} = useParams();

  const [pasTicketList, setPasTicketList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [qrList, setQrList] = useState([]);

  const getPasTicketList = async() => {
    try{
      const response = await admin.pas_ticketList(ticketNo);
      const data1 = response.data.pasTicketList
      const data2 = response.data.fileList
      const data3 = response.data.qrList

      console.log(data1);
      console.log(data2);
      console.log(data3);

      setPasTicketList(data1);
      setFileList(data2);
      setQrList(data3);

    } catch(e) {
      console.log(e);
    }
  }
  
  const onClick = async () => {
    try{
      
      navigate('/admin/Final_check_complete')

    } catch(e) {
      console.log(e);
    }

  }

  useEffect(() => {
    getPasTicketList();
}, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
      <Adminsidebar/>
      <FinalCheck ticketNo={ticketNo} pasTicketList={pasTicketList} qrList={qrList} onClick={onClick}/>  
    </div>
    <Adminfooter/> 
    </>
  )
}

export default FinalCheckContainer