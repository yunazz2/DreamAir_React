import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FlightUpdateForm = ( {flightNo, flight, onUpdate}) => {

  const [flightName, setFlightName] = useState([])
  const [routeNo, setRouteNo] = useState([])
  const [departure, setDeparture] = useState([])
  const [destination, setDestination] = useState([])
  const [departureTime, setDepartureTime] = useState([])
  const [destinationTime, setDestinationTime] = useState([])
  const [seatMax, setSeatMax] = useState([])
  const [seatUsed, setSeatUsed] = useState([])
  const [seatRemaining, setRemaining] = useState([])

  const handleChangeFlightName = (e) => {
      setFlightName(e.target.value)
  }

  const handleChangeRouteNo = (e) => {
    setRouteNo(e.target.value)
 }

  const handleChangeDeparture = (e) => {
    setDeparture(e.target.value)
  }

  const handleChangeDestination = (e) => {
    setDestination(e.target.value)
  }

  const handleChangeDepartureTime = (e) => {
    setDepartureTime(e.target.value)
  }

  const handleChangeDestinationTime = (e) => {
    setDestinationTime(e.target.value)
  }

  const handleChangeSeatMax = (e) => {
    setSeatMax(e.target.value)
  }

  const handleChangeSeatUsed = (e) => {
    setSeatUsed(e.target.value)
  }

  const handleChangeRemaining = (e) => {
    setRemaining(e.target.value)
  }

  const handleUpdate = () => {
    onUpdate(flightNo, flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)
  }

  useEffect(() => {
    if(flight) {
    setFlightName(flight.FlightName);
    setRouteNo(flight.routeNo);
    setDeparture(flight.departure);
    setDestination(flight.destination);
    setDepartureTime(flight.departureTime);
    setDestinationTime(flight.destinationTime);
    setSeatMax(flight.seatMax);
    setSeatUsed(flight.seatUsed);
    setRemaining (flight.seatRemaining);
    }
  }, [flight])

  return (
    <div className="container">
    <h1 className="text-center my-5">항공기 정보 수정</h1>

    <div className="row g-3">
      <div className="input-group mb-3 row">
        <label className="input-group-text col-md-2" id="">번호</label>
        <input type="flightNo" className="form-control col-md-10" name="flightNo" value={flightNo} readOnly/>
      </div>

      <div className="input-group mb-3 row">
        <label className="input-group-text col-md-2" id="">항공기 이미지</label>
        <input type="file" className="form-control col-md-10" name="file"/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="flightname" className="input-group-text col-md-2" id="">항공기명</label>
        <input type="text" className="form-control col-md-10" name="flightname" placeholder="항공기명" value={flightName} onChange={handleChangeFlightName} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="routeNo" className="input-group-text col-md-2" id="">노선번호</label>
        <input type="text" className="form-control col-md-10" name="routeNo" placeholder="노선번호" value={routeNo} onChange={handleChangeRouteNo} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="departure" className="input-group-text col-md-2" id="">출발지</label>
        <input type="text" className="form-control col-md-10" name="departure" placeholder="출발지" value={departure} onChange={handleChangeDeparture}/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="destination" className="input-group-text col-md-2" id="">도착지</label>
        <input type="text" className="form-control col-md-10" name="destination" placeholder="도착지" value={destination} onChange={handleChangeDestination}/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="departure" className="input-group-text col-md-2" id="">출발시간</label>
        <input type="text" className="form-control col-md-10" name="departureTime" placeholder="출발시간" value={departureTime} onChange={handleChangeDepartureTime}/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="destination" className="input-group-text col-md-2" id="">도착시간</label>
        <input type="text" className="form-control col-md-10" name="destinationTime" placeholder="도착시간" value={destinationTime} onChange={handleChangeDestinationTime}/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="seatMax" className="input-group-text col-md-2" id="">좌석 수</label>
        <input type="text" className="form-control col-md-10" name="seatMax" placeholder="좌석 수" value={seatMax} onChange={handleChangeSeatMax}/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="seatUsed" className="input-group-text col-md-2" id="">사용 중인 좌석 수</label>
        <input type="text" className="form-control col-md-10" name="seatUsed" placeholder="사용 중인 좌석 수" value={seatUsed} onChange={handleChangeSeatUsed}/>
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="seatRemaining" className="input-group-text col-md-2" id="">잔여 좌석 수</label>
        <input type="text" className="form-control col-md-10" name="seatRemaining" placeholder="잔여 좌석 수" value={seatRemaining} onChange={handleChangeRemaining}/>
      </div>
    </div>

    <hr className="my-4" />

    <div className="d-flex justify-content-between">
      <button className='btn btn-primary' onClick={ () => handleUpdate(flightNo, flight.flightName, flight.routeNo, flight.departure, flight.destination, flight.departureTime, flight.destinationTime, flight.seatMax, flight.seatUsed, flight.seatRemaining) }>수정</button>
      <button className='btn btn-danger'><Link to="/flight">취소</Link></button>
    </div>
  </div>
);
};

export default FlightUpdateForm