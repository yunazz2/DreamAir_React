import React from 'react'

const MyBooking = () => {
  return (
    <div className="container p-4">
      <h1 className="text-center my-3">나의 탑승권 관리</h1>

      <br />

      <div className="img_container text-center">
        <img src="/img/ticket_page_ticket.png" alt="ticket_page_ticket.png" style={{ width: '50px', height: '50px' }} />
      </div>
      
      <br />

      <table className="table table-striped table-hover table-bordered text-center align-middle">
        <thead>
          <tr className="table-primary">
              <th>예매 번호</th>
              <th>탑승권 번호</th>
              <th>상품명</th>
              <th>출발일</th>
              <th>결제 금액</th>
              <td>체크인 여부</td>
              <th>탑승 여부</th>
              <th>환불 / 좌석 변경 / 조회</th>
          </tr>
        </thead>

        <tbody>
          {/* 예매 내역이 없을 때 */}
          {/* ..... */}

          {/* 예매 내역이 있을 때 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>                                
            <td></td>
            <td></td>
            <td>
                체크인 전
                체크인 완료
            </td>
            <td>
                탑승 전
                탑승 완료
            </td>
            <td>
                <span>
                  <button>[환불]</button>
                  <p>/</p>
                  <button>[좌석 변경]</button>
                  <p>/</p>
                  <button>[조회]</button>
                </span>
            </td>
          </tr>

        </tbody>

      </table>
    </div>
  )
}

export default MyBooking