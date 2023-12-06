import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as flights from '../../apis/flight'
import FlightInsertForm from '../../components/flight/FlightInsertForm'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FlightInsertContainer = () => {

  const navigate = useNavigate();

  const flight = useState([]);

  const onInsert = async (flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining) => {
    try {
      const response = await flights.flight_insert(flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)

      alert('등록 완료')
      console.log(response.data);

      // 👉 게시글 목록 이동
      navigate('/flight')

    }
    catch(e) {
      console.log(e);
    }
  }

  return (
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <FlightInsertForm onInsert={onInsert} flight={flight}/>
    </div> 
    <Adminfooter/> 
    </>    

  )
}

export default FlightInsertContainer