import React from 'react'

const Seat = () => {
  return (
    <div className="seat-content mt-5 py-3">
      <h1 style={{ textAlign: 'center' }}>좌석 선택</h1>

      <br />
      
      <div className="img_container text-center">
        <img src="/img/select_seat.png" alt="좌석선택" />
      </div>

      <div className="seat-header2 mt-4">
        <h2>가는 편</h2>
      </div>

      <div className="seatInnerWrap">
        <div className="seatInnerLeft">
          <div className="left1">
            <div className="nameView"></div>
              <div className="seatView">
                <div className="seatNoDeps">
                  <div className="SeatNoDeps">
                    
                    <br />

                    {/* 좌석 */}
                    <div className="seat1">
                      {/* {seatStatus.map((seat, index) => (
                        <React.Fragment key={index}>
                          <input
                            type="checkbox"
                            className="seatBox"
                            value={seat.seatNo}
                            id={`seat-${seat.seatNo}`}
                            disabled={seat.status === 1}
                          />
                          <label htmlFor={`seat-${seat.seatNo}`}>{seat.seatNo}</label>
                          {index % 4 === 0 && <br />}
                          {index % 40 === 0 && <br />}
                        </React.Fragment>
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
        <div className="seatInnerRight">
          <div className="seatInnerRightTop">
              <div className="seatInfo">
                  <div className="seatInfo_bookSeat"><img alt="" src="/img/bookableSeat.png" /> 선택 가능 좌석 </div>
                  <div className="seatInfo_bookingSeat"><img alt="" src="/img/bookingSeat.png" /> 선택한 좌석 </div>
                  <div className="seatInfo_bookedSeat"><img alt="" src="/img/bookedSeat.png" /> 선택 불가 좌석 </div>
              </div>
          </div>
        </div>

        <div className="seatInnerRightDown">
          <div className="passengerName">탑승객명
            {/* <h5 th:each="passenger : ${booking.passengerNames}">
              <span th:text="${passenger}"></span>
            </h5> */}
          </div>
          
          <div>인원 수
            {/* <span className="spanPeople" th:text="${booking.pasCount}"></span>명 */}
          </div>

          <br />

          <div className="goSeat">가는 편 좌석
            <input type="text" id="seatNoDeps" name="seatNoDeps" style={{padding: "0", height: "17px"}} readOnly />
          </div>

        </div>
      </div>

      {/* <th:block th:if="${booking.roundTrip == '왕복'}">
        <button type="button" className="seatInnerBottom" id="btn" onclick="goToNextStep()">
            <span>다음 단계로</span>
        </button>
      </th:block>
      <th:block th:unless="${booking.roundTrip == '왕복'}">
        <button type="submit" className="seatInnerBottom" id="btn">
            <span>선택 완료</span>
        </button>
      </th:block> */}

    </div>
  )
}

export default Seat