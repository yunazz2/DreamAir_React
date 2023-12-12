import React, { useEffect, useState } from 'react'
import * as userjs from '../../apis/user'
import CheckIn from '../../components/user/CheckIn'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

const CheckInContainer = () => {

  const userId = sessionStorage.getItem('userId');
  const [ticketList, setTicketList] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getTicketList = async (ticketNo) => {
    try {
      const response = await userjs.selectTicketList(ticketNo, userId);
      // 받아온 데이터로 상태 업데이트 또는 처리할 작업 수행
      setTicketList(response.data); // 예시로 받아온 데이터를 ticketList 상태로 설정
      setLoading(false); // 데이터 로딩이 완료되었음을 표시
    } catch (error) {
      // 오류 처리
      console.error('Error while fetching ticket list:', error);
      setLoading(false); // 에러가 발생했으므로 데이터 로딩 완료
    }
  };
 
  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <CheckIn getTicketList={getTicketList}/>
      </div>
      <Footer />
    </>
  )
}

export default CheckInContainer