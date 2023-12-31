import React from 'react';
import { Link } from 'react-router-dom';

const TicketList = ({isLoading, ticketList}) => {
 
  return (
      <div>
      <br />
      { isLoading && (
        <center>
          <img src="/img/loading.gif" alt="loading" />
        </center>
      )}
      { !isLoading && ticketList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>항공기 번호</th>
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
                <tr key={ticket.ticketNo}>        {/* 반복되는 요소에 key */}
                  <td>{ticket.flightNo}</td>      {/* 항공기 번호 확인용으로 추가 */}
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
                    {ticket.isBoarded === 0 ? (
                      <button className="check_Button btn btn-primary active"><Link to={`/admin/Final_check/${ticket.ticketNo}`}>미탑승</Link></button>
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

      {ticketList == null && (
        <table>
        <tbody>
        {ticketList.isEmpty() && (
            <tr>
                <td colSpan="12">등록된 탑승권 정보가 없습니다.</td>
            </tr>
            )}
        </tbody>
        </table>
    )}

    </div>

  );
};

export default TicketList