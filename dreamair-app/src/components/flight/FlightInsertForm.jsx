import React from 'react'
import { Link } from 'react-router-dom';

const FlightInsertForm = ({ flightName, file, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining, onInsert }) => {
  const onClick = () => {
    onInsert(flightName, file, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)
  }
  return (
    <div className='container'>
      <h1 className="text-center my-5">항공기 정보 등록</h1>
      <br />

      <div className="row g-3">
        <div className="input-group mb-3 row">
          <label htmlFor="flightname" className="input-group-text col-md-2">항공기명</label>
          <input type="text" className="form-control col-md-10" name="flightName" value={flightName} placeholder="항공기명" />
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2">항공기 이미지</label>
          <input type="file" className="form-control col-md-10" name="file" value={file}/>
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="routeNo" className="input-group-text col-md-2">노선번호</label>
          <input type="text" className="form-control col-md-10" name="routeNo" value={routeNo} placeholder="노선번호" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="departure" className="input-group-text col-md-2">출발지</label>
          <input type="text" className="form-control col-md-10" name="departure" value={departure} placeholder="출발지" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="destination" className="input-group-text col-md-2">도착지</label>
          <input type="text" className="form-control col-md-10" name="destination" value={destination} placeholder="도착지" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="departureTime" className="input-group-text col-md-2">출발시간</label>
          <input type="text" className="form-control col-md-10" name="departureTime" value={departureTime} placeholder="출발시간" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="destinationTime" className="input-group-text col-md-2">도착시간</label>
          <input type="text" className="form-control col-md-10" name="destinationTime" value={destinationTime} placeholder="도착시간" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="seatMax" className="input-group-text col-md-2">좌석 수</label>
          <input type="text" className="form-control col-md-10" name="seatMax" value={seatMax} placeholder="좌석 수" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="seatUsed" className="input-group-text col-md-2">사용 중인 좌석 수</label>
          <input type="text" className="form-control col-md-10" name="seatUsed" value={seatUsed} placeholder="사용 중인 좌석 수" />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="seatRemaining" className="input-group-text col-md-2">잔여 좌석 수</label>
          <input type="text" className="form-control col-md-10" name="seatRemaining" value={seatRemaining} placeholder="잔여 좌석 수" />
        </div>
      </div>

      <hr className="my-4" />

      <div className="d-flex justify-content-between">
        <button onClick={ () => onInsert(flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining) }>등록</button>
        <Link to="/flight">취소</Link>
      </div>
    </div>
  );
};

export default FlightInsertForm