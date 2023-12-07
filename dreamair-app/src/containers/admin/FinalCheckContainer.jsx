import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import FinalCheck from '../../components/admin/FinalCheck'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FinalCheckContainer = () => {
    
  const {ticketNo} = useParams();

  const navigate = useNavigate()

  const [pasTicketList, setPasTicketList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [qrList, setQrList] = useState([]);

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isBoarded, setIsBoarded] = useState(0); // 초기 값 : 미탑승(0)  -> 변경 값 : 탑승완료(1)

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

  const onHandleValue = async () => {
    try {
      // setIsBoarded(1);
      const response = await admin.ticket_update_b(ticketNo, 1)
      const data = response.data;
      console.log(data);
    
    }  catch(e) {
      console.log(e);
    }
  }

  const onHandleCheck = async (ticketNo) => {
    try{
      const check = window.confirm('최종 탑승 완료하시겠습니까?')
      if(check){
        setIsConfirmed(true);
        onHandleValue().then(() => {
          alert('DB 변경 완료');

          navigate(`/admin/Final_check_complete/${ticketNo}`)
        })
        
      } else {
        setIsConfirmed(false);
      }
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
      <FinalCheck ticketNo={ticketNo} pasTicketList={pasTicketList} qrList={qrList} onHandleCheck={onHandleCheck}/>  
    </div>
    <Adminfooter/> 
    </>
  )
}

export default FinalCheckContainer