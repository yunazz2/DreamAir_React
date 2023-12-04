import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as flight from '../../apis/flight'
import * as file from '../../apis/files'
import FlightInsertForm from '../../components/flight/FlightInsertForm'

const FlightInsertContainer = () => {
  const navigate = useNavigate()

  const onInsert = async (flightName, file, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining) => {
    try {
      const response = await flight.flight_insert(flightName, file, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)

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
      <FlightInsertForm onInsert={onInsert} />
    </>
  )
}

export default FlightInsertContainer