import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as flights from '../../apis/flight'
import FlightUpdateForm from '../../components/flight/FlightUpdateForm'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const FlightUpdateContainer = () => {

  const {flightNo} = useParams();

  const [flight, setFlight] = useState({})

  const navigate = useNavigate()

  const onUpdate = async (flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining) => {
    try {
      const response = await flights.flight_update(flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)
      console.log(response.data);
      alert('수정 완료')

      navigate('/flight')
    } catch(e) {
        console.log(e);
    }
  }

  const getFlight = async () => {
    try {
      const response = await flights.flight_select(flightNo);
      const data = response.data
      console.log(data);
      setFlight(data)
    }
    catch(e) {
      console.log(e);
    }
}

  const onDelete = async (flightNo) => {
    const response = await flights.flight_delete(flightNo);
    console.log(response.data);
    alert('삭제 완료')

    navigate('/flight')
}

  useEffect(() => {
    getFlight()
  }, [])

    return (
      <>
      <Header/>
      <div className='d-flex'>
          <Adminsidebar/>
          <div className="admin_container">
            <FlightUpdateForm flightNo={flightNo} onUpdate={onUpdate} onDelete={onDelete} flight={flight}/>
          </div>
      </div>
      <Adminfooter/>  
      </>
   )
  }


export default FlightUpdateContainer