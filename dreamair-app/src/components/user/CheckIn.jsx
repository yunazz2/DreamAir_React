import React from 'react';

// const CheckIn = ({ TicketList, checkinPro }) => {
const CheckIn = () => {

  return (
    <div className='container p-4'>
      <h1 className='text-center my-3'>체크인</h1>
      <hr />
      <div className="btn-box d-grid gap-2 ">
        <div className='col-5'>
          <ul className="list_type3">
            <li>예약정보를 입력하시면 로그인 없이도 체크인/좌석배정이 가능합니다.</li>
            <li>팝업 차단 해제 후 이용해주시기 바랍니다.</li>
          </ul>
          <label className="form-label">체크인</label>
          <div className="inner alC">
            <select id="numTypeSelect" style={{ width: '200px' }} title="종류별 번호">
              <option value="ticketNo">탑승권 번호</option>
            </select>
            <input
              type="text"
              id="ticketNo"
              name="ticketNo"
              maxLength="8"
              placeholder="탑승권 번호 입력"
              style={{ width: '280px', textTransform: 'uppercase' }}
            />
            <button type="submit" className="btn btn-outline-primary btn-lg">
              조회
            </button>
          </div>
        </div>
      </div>
      {/* {TicketList !== null && TicketList.length > 0 ? (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>예약번호</th>
              <th>출발지</th>
              <th>도착지</th>
              <th>출발일자</th>
              <th>출발일시</th>
              <th>도착일자</th>
              <th>도착일시</th>
              <th>요금</th>
              <th colSpan="2">비고</th>
            </tr>
          </thead>
          <tbody>
            {TicketList.map((ticket) => (
              <tr key={ticket.bookingNo}>
                <td>DA000{ticket.bookingNo}</td>
                <td>{ticket.departure}</td>
                <td>{ticket.destination}</td>
                <td>{ticket.departureDate}</td>
                <td>{ticket.departureTime}</td>
                <td>{ticket.destinationDate}</td>
                <td>{ticket.destinationTime}</td>
                <td>{ticket.productPrice}</td>
                <td colSpan="2">
				{ticket.checkedIn === 0 ? (
				  <button className="checkin_btn btn btn-primary active" type="submit">
					체크인
				  </button>
				) : (
				  <button className="checkin_btn btn btn-primary disabled" type="button" disabled>
					체크인 완료
				  </button>
				)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>예매된 탑승권이 없습니다.</div>
      )} */}
    </div>
  );
};

export default CheckIn;
