import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as flights from '../../apis/flight'
import FlightList from '../../components/flight/FlightList'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FlightListContainer = () => {

  const navigate = useNavigate();

  const {flightNo } = useParams();
  const [flightList, setFlightList] = useState([]);

  // 게시글 목록 데이터
  const getFlightList = async() => {
    const response = await flights.flight_list();
    const data = await response.data;
    console.log(data);
    setFlightList(data);
  };

  const onDelete = async (flightNo) => {
    const response = await flights.flight_delete(flightNo);
    console.log(response.data);
    alert('flight 삭제 완료')

    // ➡ 게시글 목록 이동
    // navigate('/flight')
    getFlightList();
  }

  useEffect( () => {
    getFlightList();
  }, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <FlightList  flightList={flightList} flightNo={flightNo} onDelete={onDelete}/>
    </div>
    <Adminfooter/>  
    </>
  )
}

export default FlightListContainer