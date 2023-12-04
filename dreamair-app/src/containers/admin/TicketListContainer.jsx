import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as admin from '../../apis/admin'
import TicketList from '../../components/admin/TicketList';

const TicketListContainer = () => {

  const navigate = useNavigate()
  const { flightNo } = useParams();

  const [ticketList, setTicketList] = useState([]);

  // ✔ 게시글 목록 데이터
  const getTicketList = async () => {
    const response = await admin.ticket_list(); 
    const data = await response.data;
    console.log(data);
    setTicketList(data);
  };

  // 조회
  const onSearch = async (flightNo) => {
    const response = await admin.ticket_selectList(flightNo);
    console.log(response.data);
    alert('조회 완료')

    navigate('/admin/ticket_list')

  }

  useEffect(() => {
      getTicketList();
  }, [])

  return (<TicketList ticketList = {ticketList}
                      flightNo = {flightNo}
                      onSearch = {onSearch}
  ></TicketList>
  )
}

export default TicketListContainer