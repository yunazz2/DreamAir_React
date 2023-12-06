import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import TicketSearch from '../../components/admin/TicketSearch';
import TicketList from '../../components/admin/TicketList';
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const TicketListContainer = () => {

  const navigate = useNavigate()
  const { ticketNo } = useParams();
  const [isLoading, setLoading] = useState(true)
  // const { flightNo } = useParams();      // 파라미터로 받아오지 않는다
  // const { selected } = useParams();      // 파라미터로 받아오지 않는다

  const [ticketList, setTicketList] = useState([]);
  
  const getTicketList = async () => {
    const response = await admin.ticket_list(); 
    const data = await response.data;
    console.log(data);
    setTicketList(data);

    // navigate('/admin/ticket_list')
  };

  const onSearch = async (flightNo, selected) => {
    setLoading(true)
    const response = await admin.ticket_selectList(flightNo, selected);
    const data = await response.data;
    console.log('★★★★★★★★★★ TicketListContainer');
    console.log('flight No : ' + flightNo);
    console.log('selected : ' + selected);
    console.log(data);            // 데이터 OK ✅

    setTicketList(data);          // ✅ 
    setLoading(false)
  }

  useEffect(() => {
      setLoading(true)
      getTicketList();
      setLoading(false)
  }, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <div className="container">
          <h1 className="text-center my-5">탑승권 관리</h1>
          <TicketSearch ticketList={ticketList} onSearch={onSearch} ticketNo={ticketNo}/>
          <TicketList isLoading = {isLoading} ticketList = {ticketList} ticketNo={ticketNo}/>
        </div>
    </div>   
    <Adminfooter/> 
    </>
  )
}

export default TicketListContainer