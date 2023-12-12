import React from 'react'

const AdminBookingList = ({AdminbookingList}) => {
  return (
    <div className='container'>
      <h1 className="text-center mt-5 mb-2">예매 관리</h1>
      <br/>

      {AdminbookingList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>예매번호</th>
              <th>예약자 이름</th>
              <th>좌석번호</th>
              <th>상품번호</th>
              <th>노선번호</th>
              <th>탑승인원</th>
              <th>왕복여부</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {AdminbookingList.length === 0 ? (
              <tr>
                <td colSpan="13">등록된 예매 정보가 없습니다.</td>
              </tr>
            ) : (
              AdminbookingList.map((booking) => (
                <tr key={booking.bookingNo}>
                  <td>{booking.bookingNo}</td>
                  <td>{booking.name}</td>
                  <td>{booking.seatNo}</td>
                  <td>{booking.productNo}</td>
                  <td>{booking.routeNo}</td>
                  <td>{booking.pasCount}</td>
                  <td>{booking.roundTrip}</td>
                  <td>{booking.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {AdminbookingList == null && (
        <table>
          <tbody>
            <tr>
              <td colSpan="13">등록된 예매 정보가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
  };

export default AdminBookingList