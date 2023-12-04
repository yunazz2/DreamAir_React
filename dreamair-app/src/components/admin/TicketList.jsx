import React from 'react'

const TicketList = ({ticketList, flightNo, onSearch}) => {
  const handleSearch = () => {
    onSearch(flightNo)
  }

  return (
    <div className='container'>
      <h1 className="text-center my-5">탑승권 관리</h1>
        
        <div className="btn-box d-grid gap-2 ">
          <div className="form-floating col-5">
            <div className="input-group has-validation">
              <label htmlFor="flightNo" className="form-label me-3" style={{ lineHeight: '50px' }}>항공기 번호 조회 : </label>
              <input type="text" className="form-control me-3" style={{ lineHeight: '30px', width: '200px' }} id="filter" name="flightNo" placeholder="항공기 번호" />
              <select className="form-select" id="searchType" name="select">
                <option value="0" selected>선택</option>
                <option value="1">체크인 완료</option>
                <option value="2">탑승완료</option>
              </select>
            </div>
          </div>
          <button onClick={ () => handleSearch(flightNo) }  className="btn btn-outline-primary btn-lg">항공기 조회</button>
        </div>

      <br />

      {ticketList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>탑승권 번호</th>
              <th>탑승객 이름</th>
              <th>좌석 번호</th>
              <th>출발지</th>
              <th>도착지</th>
              <th>출발시간</th>
              <th>도착시간</th>
              <th>체크인 여부</th>
              <th>탑승 여부</th>
              <th>탑승시간</th>
              <th colSpan="2">비고</th>
            </tr>
          </thead>
          <tbody>
            {ticketList.length === 0 ? (
              <tr>
                <td colSpan="12">등록된 탑승권이 없습니다.</td>
              </tr>
            ) : (
              ticketList.map((ticket) => (
                <tr>
                  <td>{ticket.ticketNo}</td>
                  <td>{ticket.passengerName}</td>
                  <td>{ticket.seatNo}</td>
                  <td>{ticket.departure}</td>
                  <td>{ticket.destination}</td>
                  <td>{ticket.departureTime}</td>
                  <td>{ticket.destinationTime}</td>
                  <td>{ticket.checkedIn}</td>
                  <td>{ticket.isBoarded}</td>
                  <td>{ticket.boardingTime}</td>
                  <td colSpan="2">
                    <input type="hidden" className="ticketNo" value={ticket.ticketNo} />
                    <input type="hidden" className="checkedIn" value={ticket.checkedIn} />
                    {ticket.isBoarded === 0 ? (
                      <button className="check_Button btn btn-primary active" type="submit">미탑승</button>
                    ) : (
                      <button className="check_Button btn btn-primary disabled" type="button" data-bs-toggle="button" aria-disabled="true">탑승완료</button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketList