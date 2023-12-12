import React from 'react'
import { Link } from 'react-router-dom'

const FlightList = ( { flightList, onDelete }) => {

  return (
    <div className='admin_container'>
      <h1 className="text-center my-5">항공기 관리</h1>
      <div className="btn-box d-grid gap-2">
          <button className='btn btn-outline-primary btn-lg btn-big'><Link to="/flight/flight_insert" className='btn-Link'>항공기 정보 등록</Link></button>
      </div>
      <br />

      {flightList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th align='100'>항공기 번호</th>
              <th align='100'>이미지</th>
              <th align='100'>항공기 이름</th>
              <th align='100'>노선번호</th>
              <th align='100'>출발지</th>
              <th align='100'>도착지</th>
              <th align='100'>출발시간</th>
              <th align='100'>도착시간</th>
              <th align='100'>좌석수</th>
              <th align='100'>잔여 좌석 수</th>
              <th align='100'>사용 중인 좌석 수</th>
              <th align='100' colSpan="2">비고</th>
            </tr>
          </thead>

          <tbody>
            {flightList.map((flight) => (
              <tr key={flight.flightNo}>
                <td align='center'>{flight.flightNo}</td>
                <td align='center' style={{width: '300px', height: '300px'}} >{flight.thumbnail && (<img src={`/file/img/${flight.thumbnail.fileNo}`} alt="게시글 이미지" className="card-img-top w-70 p-4" />)}</td>
                <td align='center'>{flight.flightName}</td>
                <td align='center'>{flight.routeNo}</td>
                <td align='center'>{flight.departure}</td>
                <td align='center'>{flight.destination}</td>
                <td align='center'>{flight.departureTime}</td>
                <td align='center'>{flight.destinationTime}</td>
                <td align='center'>{flight.seatMax}</td>
                <td align='center'>{flight.seatRemaining}</td>
                <td align='center'>{flight.seatUsed}</td>

                <td colSpan={2}>
                  <div className="btn-box">
                    <button className='btn btn-primary'><Link to={`/flight/flight_update/${flight.flightNo}`}>수정</Link></button>
                    <button className='btn btn-danger' onClick={ () => onDelete(flight.flightNo) }>삭제</button>
                  </div>
                </td>
    
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {flightList === null && (
        <div>
          {flightList && flightList.length === 0 && <div>등록된 항공기 정보가 없습니다.</div>}
        </div>
      )}
      </div>
  )}

export default FlightList