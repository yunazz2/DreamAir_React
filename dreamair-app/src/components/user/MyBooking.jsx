import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContextProvider'

const MyBooking = ({bookingList}) => {

  const {isLogin} = useContext(LoginContext);

  return (
    <div className="container p-4">
      <h1 className="text-center my-3">나의 탑승권 관리</h1>

      <br />

      <div className="img_container text-center">
        <img src="/img/ticket_page_ticket.png" alt="ticket_page_ticket.png" style={{ width: '50px', height: '50px' }} />
      </div>
      
      <br />

      {!isLogin
      // 비회원일 시
      ?
      <>
        <div className="row">
          <div className="col-lg-6 mx-auto">
              <p>비회원 주문하신 경우, 전화번호와 주문 비밀번호를 입력해주세요.</p>
          </div>
        </div>

        <br />
        
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="mb-5">
              <table className="table">
                <tr>
                  <td>전화번호 : </td>
                  <td>
                    <input type="text" className="form-control" name="phone" 
                      placeholder="- 생략하고 입력해주세요." />
                  </td>
                </tr>
                <tr>
                  <td>주문 비밀번호 : </td>
                  <td>
                    <input type="password" className="form-control" name="userPw" 
                      placeholder="주문 비밀번호를 입력해주세요." />
                  </td>
                </tr>
              </table>
              <button type="submit" className="btn btn-outline-primary">조회</button>
            </div>
          </div>
        </div>
      </>
      :
      // 회원일 시
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
            {bookingList.length == 0 ? (
              <tr>
                <td colSpan="8" align="center">
                  예매 내역이 없습니다.
                </td>
              </tr>
            ) : (
              bookingList.map((booking) => (
                <tr key={booking.bookingNo}>
                  <td align='center'>{booking.bookingNo}</td>
                  <td align='center'>{booking.ticketNo}</td>
                  <td align='center'>{booking.name}</td>
                  <td align='center'>{booking.departureDate}</td>
                  <td>50,000</td>
                  <td align='center'>{booking.checkedIn === 0 ? '체크인 전' : '체크인 완료'}</td>
                  <td align='center'>{booking.isBoarded === 0 ? '탑승 전' : '탑승 완료'}</td>
                  <td>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      <button>[환불]</button>
                      <p style={{ display: 'inline' }}> / </p>
                      <button>[좌석 변경]</button>
                      <p style={{ display: 'inline' }}> / </p>
                      <Link to={`/user/booking/ticketInfo/${booking.ticketNo}`}>[조회]</Link>
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      }
    </div>
  )
}

export default MyBooking