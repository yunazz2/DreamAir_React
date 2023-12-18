import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContextProvider'

const MyBooking = ({bookingList, getGuestBookingList, guestBookingList}) => {

  const {isLogin} = useContext(LoginContext);
  const [phone, setPhone] = useState('');
  const [userPw, setUserPw] = useState('');
  const [showTable, setShowTable] = useState(false);

  const guest = (e) => {
    e.preventDefault()
    const form = e.target
    const phone = form.phone.value
    const userPw = form.userPw.value

    setPhone(phone);
    setUserPw(userPw);
  };

  const handleSelectBookingList = () => {
    getGuestBookingList(phone, userPw);
  };

  useEffect(() => {
    if (guestBookingList[0] !== null && guestBookingList.length > 0) {
      setShowTable(true);
    }
  }, [guestBookingList]);

  return (
    <div className="container p-4">
      <h1 className="text-center my-3">나의 탑승권 관리</h1>

      <br />

      <div className="img_container text-center">
        <img src="/img/ticket_page_ticket.png" alt="ticket_page_ticket.png" style={{ width: '50px', height: '50px' }} />
      </div>
      
      <br />

      {!isLogin && !showTable ? (
        // 비회원일 시
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
                <form onSubmit={(e) => guest(e)}>
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
                  <button type="submit" className="btn btn-outline-primary" onClick={handleSelectBookingList}>조회</button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        // 비회원이며 전화번호, 예매 비밀번호 입력 후 조회 시
        !isLogin && showTable ? (
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
              {guestBookingList.length == 0 ? (
                <tr>
                  <td colSpan="8" align="center">
                    예매 내역이 없습니다.
                  </td>
                </tr>
              ) : (
                guestBookingList.map((booking) => (
                  <tr key={booking.bookingNo}>
                    <td align='center'>{booking.bookingNo2}</td>
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
      ) : (
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
      ))}
    </div>
  )
}

export default MyBooking