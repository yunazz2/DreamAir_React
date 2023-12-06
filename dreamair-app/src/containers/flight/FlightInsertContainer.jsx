import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as flights from '../../apis/flight'
import FlightInsertForm from '../../components/flight/FlightInsertForm'

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
      <FlightInsertForm onInsert={onInsert}
                        flight={flight}
      />
    </>
  )
}

export default FlightInsertContainer