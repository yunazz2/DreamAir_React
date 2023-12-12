import React, { useState } from 'react';

const CheckIn = ({ getTicketList  }) => {

  const [ticketNo, setTicketNo] = useState('');

  const handleTicketNoChange = (event) => {
    setTicketNo(event.target.value);
  };

  const handleCheckIn = () => {
    console.log('ToContainer => ', ticketNo);
    getTicketList(ticketNo);
  };

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
            value={ticketNo}
            onChange={handleTicketNoChange} // 입력값 변경 이벤트 핸들러 연결
            />
            <button type="button" className="btn btn-outline-primary btn-lg" onClick={handleCheckIn}>
              조회
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CheckIn;
