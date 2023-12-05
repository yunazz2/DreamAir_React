import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as flight from '../../apis/flight'
import FlightUpdateForm from '../../components/flight/FlightUpdateForm'

const FlightUpdateContainer = () => {

  const {flightNo} = useParams();
  const [flight, setFlight] = useState({})

  const navigate = useNavigate()

  const onUpdate = async (flightNo, flightName, file, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining) => {
    try {
      const response = await flight.flight_update(flightNo, flightName, file, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)
      console.log(response.data);
      alert('수정 완료')

      navigate('/flight')
    } catch(e) {
        console.log(e);
    }
  }

  const onDelete = async (flightNo) => {
    const response = await flight.flight_delete(flightNo);
    console.log(response.data);
    alert('삭제 완료')

    navigate('/flight')
}
    return (<FlightUpdateForm flighNo={flightNo} 
                              onUpdate={onUpdate}
                              onDelete={onDelete}
       />)
  }


export default FlightUpdateContainer