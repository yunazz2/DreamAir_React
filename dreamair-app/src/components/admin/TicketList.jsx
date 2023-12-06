import React from 'react';
import { Link } from 'react-router-dom';

const TicketList = ({ticketList}) => {
 
  return (
      <div>
      <br />
      {ticketList != null && (
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
                <tr>
                  <td align='center'>{ticket.flightNo}</td>
                  <td align='center'>{ticket.ticketNo}</td>
                  <td align='center'>{ticket.passengerName}</td>
                  <td align='center'>{ticket.seatNo}</td>
                  <td align='center'>{ticket.departure}</td>
                  <td align='center'>{ticket.destination}</td>
                  <td align='center'>{ticket.departureTime}</td>
                  <td align='center'>{ticket.destinationTime}</td>
                  <td align='center'>{ticket.checkedIn}</td>
                  <td align='center'>{ticket.isBoarded}</td>
                  <td align='center'>{ticket.boardingTime}</td>
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