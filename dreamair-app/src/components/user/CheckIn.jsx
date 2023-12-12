import React, { useState } from 'react';

const CheckIn = ({ getTicketList, ticketList }) => {

  console.log(ticketList)
  console.log("위에 확인해~!")

  const [ticketNo, setTicketNo] = useState('');
  const [showTable, setShowTable] = useState(false); // 상태 추가

  const handleTicketNoChange = (event) => {
    setTicketNo(event.target.value);
  };

  const handleCheckIn = () => {
    console.log('ToContainer => ', ticketNo);
    getTicketList(ticketNo);
    setShowTable(true);
  };

    // 표를 보여주는 JSX
    const renderTable = () => {
      if (showTable) {
        return (
          <div>
            <h2>조회 결과</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Column 1</th>
                  <th scope="col">Column 2</th>
                  <th scope="col">Column 3</th>
                  <th scope="col">Column 4</th>
                  <th scope="col">Column 5</th>
                </tr>
              </thead>
              <tbody>
                {/* 여기에 데이터를 매핑하여 채우는 로직 추가 */}
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                {/* 추가적인 데이터들을 필요한 만큼 추가 */}
              </tbody>
            </table>
          </div>
        );
      }
      return null; // '조회' 버튼을 누르기 전에는 아무것도 표시하지 않음
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
            onChange={handleTicketNoChange}
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
