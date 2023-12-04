import React from 'react'
import { Link } from 'react-router-dom';

const FlightUpdateForm = ( {flight, file, flightNo, flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining, onUpdate}) => {

  // const [flightName, setFlightName] = useState('')
  // const [file, setFile] = useState('')
  // const [routeNo, setRouteNo] = useState('')
  // const [departure, setDeparture] = useState('')
  // const [destination, setDestination] = useState('')
  // const [departureTime, setDepartureTime] = useState('')
  // const [destinationTime, setDestinationTime] = useState('')
  // const [seatMax, setSeatMax] = useState('')
  // const [seatUsed, setSeatUsed] = useState('')
  // const [seatRemaining, setRemaining] = useState('')

//   const handleChangeFlightName = (e) => {
//       setFlightName(e.target.value)
//   }

//   const handleChangeFlie = (e) => {
//     setFlie(e.target.value)
// }

//   const handleChangeRouteNo = (e) => {
//     setRouteNo(e.target.value)
//  }

//   const handleChangeDeparture = (e) => {
//     setDeparture(e.target.value)
//   }

//   const handleChangeDestination = (e) => {
//     setDestination(e.target.value)
//   }

//   const handleChangeDepartureTime = (e) => {
//     setDepartureTime(e.target.value)
//   }

//   const handleChangeDestinationTime = (e) => {
//     setDestinationTime(e.target.value)
//   }

//   const handleChangeSeatMax = (e) => {
//     setSeatMax(e.target.value)
//   }

//   const handleChangeSeatUsed = (e) => {
//     setSeatUsed(e.target.value)
//   }

//   const handleChangeRemaining = (e) => {
//     setRemaining(e.target.value)
//   }

  const handleUpdate = () => {
    onUpdate(flightNo, flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)
  }

  return (
    <div className="container">
    <h1 className="text-center my-5">항공기 정보 수정</h1>

    <div className="row g-3">
      <div className="input-group mb-3 row">
        <label className="input-group-text col-md-2" id="">항공기 이미지</label>
        <input type="file" className="form-control col-md-10" name="file" value={file.File} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="flightname" className="input-group-text col-md-2" id="">항공기명</label>
        <input type="text" className="form-control col-md-10" name="flightname" placeholder="항공기명" value={flight.flightname} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="routeNo" className="input-group-text col-md-2" id="">노선번호</label>
        <input type="text" className="form-control col-md-10" name="routeNo" placeholder="노선번호" value={flight.routNo} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="departure" className="input-group-text col-md-2" id="">출발지</label>
        <input type="text" className="form-control col-md-10" name="departure" placeholder="출발지" value={flight.departure} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="destination" className="input-group-text col-md-2" id="">도착지</label>
        <input type="text" className="form-control col-md-10" name="destination" placeholder="도착지" value={flight.destination} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="seatMax" className="input-group-text col-md-2" id="">좌석 수</label>
        <input type="text" className="form-control col-md-10" name="seatMax" placeholder="좌석 수" value={flight.seatMax} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="seatUsed" className="input-group-text col-md-2" id="">사용 중인 좌석 수</label>
        <input type="text" className="form-control col-md-10" name="seatUsed" placeholder="사용 중인 좌석 수" value={flight.seatUsed} />
      </div>

      <div className="input-group mb-3 row">
        <label htmlFor="seatRemaining" className="input-group-text col-md-2" id="">잔여 좌석 수</label>
        <input type="text" className="form-control col-md-10" name="seatRemaining" placeholder="잔여 좌석 수" value={flight.seatRemaining} />
      </div>
    </div>

    <hr className="my-4" />

    <div className="d-flex justify-content-between">
      <button className='btn btn-primary' onClick={ () => onUpdate(flightNo, flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining) }>수정</button>
      <button className='btn btn-danger'><Link to="/flight">취소</Link></button>
    </div>
  </div>
);
};

export default FlightUpdateForm