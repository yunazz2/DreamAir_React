import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import TicketSearch from '../../components/admin/TicketSearch';
import TicketList from '../../components/admin/TicketList';


const TicketListContainer = () => {

  const navigate = useNavigate();

  const { flightNo } = useParams();
  const { ticketNo } = useParams();

  const [ticketList, setTicketList] = useState([]);
  
  const getTicketList = async () => {
    const response = await admin.ticket_list(); 
    const data = await response.data;
    console.log(data);
    setTicketList(data);

    navigate('/admin/ticket_list')
  };

  const onSearch = async (flightNo) => {
    const response = await admin.ticket_selectList(flightNo);
    const data = await response.data;
    console.log(data);
}

  useEffect(() => {
      getTicketList();
  }, [])

  return (
    <>  
    <div className='container'>
    <h1 className="text-center my-5">탑승권 관리</h1>
    
    <TicketSearch 
                    ticketList={ticketList}
                    onSearch={onSearch}
                    ticketNo={ticketNo}
                    flightNo={flightNo}/>
    <TicketList 
                    ticketList = {ticketList}
                    ticketNo={ticketNo}
                    flightNo = {flightNo}/>
    </div>
    </>
  )
}

export default TicketListContainer