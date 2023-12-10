import React, { useContext } from 'react'
import styles from './Seat.module.css'
import { BookingContext } from '../../contexts/BookingContextProvider'

const Seat = () => {

  const {booking, setBooking} = useContext(BookingContext)
  console.log("productDep "+ booking.productNoDep);
  console.log("productDes "+ booking.productNoDes);
  console.log("routeDep" + booking.routeNoDep);
  console.log("routeDes" + booking.routeNoDes);

  return (
    <div className={styles.seatContent}>
      <h1 style={{ textAlign: 'center' }}>좌석 선택</h1>

      <br />
      
      <div className="img_container text-center">
        <img src="/img/select_seat.png" alt="좌석선택" />
      </div>

      <div className={styles.seatHeader2}>
        <h2>가는 편</h2>
      </div>

      <div className="seatInnerWrap">
        <div className={styles.seatInnerLeft}>
          <div className={styles.left1}>
            <div className={styles.nameView}></div>
              <div className={styles.seatView}>
                <div className="seatNoDeps">
                  <div className="SeatNoDeps">
                    
                    <br />

                    {/* 좌석 */}
                    <div className={styles.seat1}>
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
        
        <div className={styles.seatInnerRight}>
          <div className={styles.seatInnerRightTop}>
              <div className={styles.seatInfo}>
                  <div className={styles.seatInfoBookSeat}><img alt="" src="/img/bookableSeat.png" /> 선택 가능 좌석 </div>
                  <div className="seatInfo_bookingSeat"><img alt="" src="/img/bookingSeat.png" /> 선택한 좌석 </div>
                  <div className={styles.seatInfoBookedSeat}><img alt="" src="/img/bookedSeat.png" /> 선택 불가 좌석 </div>
              </div>
          </div>
        </div>

        <div className={styles.seatInnerRightDown}>
          <div className="passengerName">탑승객명
            {/* <h5 th:each="passenger : ${booking.passengerNames}">
              <span th:text="${passenger}"></span>
            </h5> */}
          </div>
          
          <div>인원 수
            {/* <span className="spanPeople" th:text="${booking.pasCount}"></span>명 */}
          </div>

          <br />

          <div className={styles.goSeat}>가는 편 좌석
            <input type="text" id="seatNoDeps" name="seatNoDeps" style={{padding: "0", height: "17px"}} readOnly />
          </div>

        </div>
      </div>

      <button type="button" className={styles.seatInnerBottom} id="btn">다음 단계로</button>
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