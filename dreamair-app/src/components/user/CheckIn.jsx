import React, { useState } from 'react';
import * as userjs from '../../apis/user';
import Swal from 'sweetalert2';

const CheckIn = ({ getTicketList, ticketList, userId, isLoading }) => {

  const [ticketNo, setTicketNo] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(ticketList[0]?.checkedIn === 1);

  console.log(ticketList[0]);

  const handleTicketNoChange = (event) => {
    setTicketNo(event.target.value);
  };

  const handleCheckIn = () => {
    console.log('ToContainer => ', ticketNo);
    getTicketList(ticketNo);
    setShowTable(true);
  };
  
  const changeCheckedIn = async () => {
    // SweetAlert2 모달 창 띄우기
    const confirmCheckIn = await Swal.fire({
      title: '체크인을 진행하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소'
    });

    if (confirmCheckIn.isConfirmed) {
      console.log('체크인 진행');

      try {
        const response = await userjs.checkIn(ticketNo, userId);
        console.log('체크인 API 실행 결과:', response.data);
        setIsCheckedIn(true);

        Swal.fire('체크인 완료', '체크인이 완료되었습니다.', 'success');
      } catch (error) {
        console.error('체크인 API 오류:', error);
        Swal.fire('오류', '체크인 중 오류가 발생했습니다.', 'error');
      }
    } else {
      console.log('체크인 취소');
    }
  };

  const renderButton = () => {
    if (isCheckedIn) {
      return (
        <button type="button" className="checkin_btn btn btn-primary disabled" id="btn">
          체크인 완료
        </button>
      );
    } else {
      return (
        <button type="button" className="checkin_btn btn btn-primary active" id="btn" onClick={changeCheckedIn}>
          체크인
        </button>
      );
    }
  };

  return (
    <div className='container p-4'>
      <h1 className='text-center my-3'>체크인</h1>
      <br />
      <div className="btn-box">
        <div className='col-12'>
          <ul className="list_type3">
            <li>예약정보를 입력하시면 로그인 없이도 체크인/좌석배정이 가능합니다.</li>
            <li>팝업 차단 해제 후 이용해주시기 바랍니다.</li>
          </ul>

          <br />

          <div className="inner alC">
            <select id="numTypeSelect" style={{ width: '200px' }} title="종류별 번호">
              <option value="ticketNo">탑승권 번호</option>
            </select>
            
            <br />
            
            <input
            type="text"
            id="ticketNo"
            name="ticketNo"
            maxLength="8"
            placeholder="탑승권 번호 입력"
            style={{ width: '280px', textTransform: 'uppercase' }}
            value={ticketNo}
            onChange={handleTicketNoChange}
            />
            <button type="button" className="btn btn-outline-primary btn-lg" onClick={handleCheckIn}>
              조회
            </button>
          </div>
          { isLoading && (
            <center>
              <img src="/img/loading.gif" alt="loading" />
            </center>
          )}
          {!isLoading && showTable && ( // showTable 상태에 따라 테이블을 보여줍니다.
            <table className="table"> {/* 테이블을 사용할 디자인 및 스타일은 자유롭게 수정할 수 있습니다. */}
              <thead>
                <tr>
                  <th>예매 번호</th>
                  <th>출발지</th>
                  <th>도착지</th>
                  <th>출발일시</th>
                  <th>도착일시</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ticketList[0]?.bookingNo}</td>
                  <td>{ticketList[0]?.departure}</td>
                  <td>{ticketList[0]?.destination}</td>
                  <td>{ticketList[0]?.departureDate + "　" + ticketList[0]?.departureTime}</td>
                  <td>{ticketList[0]?.destinationDate + "　" + ticketList[0]?.destinationTime}</td>
                  <td>{renderButton()}</td>
                </tr>
              </tbody>
            </table>
          )}


        </div>
      </div>
      
    </div>
  );
};

export default CheckIn;
