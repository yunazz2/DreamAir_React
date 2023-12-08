import React, { useEffect, useState } from 'react'
import styles from './Seat.module.css'
import Swal from "sweetalert2";

const Seat = ({pasCount, roundTrip, bookingObject, isLoading}) => {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatStatus = bookingObject.seatStatus;


  // 체크박스 변경 시 처리하는 함수
  const handleCheckboxChange = (seatNo) => {
    // 이미 선택된 좌석이라면 제거, 아니면 추가
    const updatedSeats = selectedSeats.includes(seatNo)
      ? selectedSeats.filter((selectedSeat) => selectedSeat !== seatNo)
      : [...selectedSeats, seatNo];

    setSelectedSeats(updatedSeats);
  };

  // 왕복 여부에 따른 버튼 노출
  const renderButton = () => {
    if (roundTrip === '왕복') {
      return (
        <button type="button" className={styles.seatInnerBottom} id="btn">
          다음 단계로
        </button>
      );
    } else {
      return (
        <button type="button" className={styles.seatInnerBottom} id="btn">
          선택 완료
        </button>
      );
    }
  };

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

      
      <div className={styles.seatInnerWrap}>
        <div className={styles.seatInnerLeft}>
          <div className={styles.left1}>
            <div className={styles.nameView}></div>
              <div className={styles.seatView}>
                <div className={styles.seatNoDeps}>
                  <br />

                  {/* 좌석 */}
                  {!isLoading && seatStatus && Array.isArray(seatStatus) && seatStatus.length > 0 ? (
                    <div className={styles.seat1}>
                      {seatStatus.slice(0, 40).map((seat, index) => (
                        <React.Fragment key={index}>
                          {(seat.status == 1) ? (
                            <input
                            type='checkbox'
                            className={styles.seatBox}
                            id={`seat-${seat.seatNo}`}
                            style={{ marginRight: index % 4 === 3 ? '0' : '5px', marginBottom: '5px' }}
                            disabled
                            />
                            ) : (
                              <input
                                type="checkbox"
                                className={styles.seatBox}
                                id={`seat-${seat.seatNo}`}
                                style={{
                                  marginRight: index % 4 === 3 ? '0' : '5px',
                                  marginBottom: '5px',
                                }}
                                checked={selectedSeats.includes(seat.seatNo)} // 체크 여부 확인
                                onChange={() => handleCheckboxChange(seat.seatNo)} // onChange 이벤트 추가
                              />
                            )}
                            <label htmlFor={`seat-${seat.seatNo}`}></label>
                            {(index + 1) % 4 === 0 && <br />} {/* 4열마다 줄바꿈 */}
                          </React.Fragment>
                        ))}
                      </div>
                  ) : (
                    <center>  {/* 로딩 이미지 */}
                      <img src="/img/loading.gif" alt="loading" />
                    </center>
                  )}
                </div>
              </div>
          </div>
        </div>
        
        <div className={styles.seatInnerRight}>
          <div className={styles.seatInnerRightTop}>
              <div className={styles.seatInfo}>
                  <div className={styles.seatInfoBookSeat}><img alt="" src="/img/bookableSeat.png" /> 선택 가능 좌석 </div>
                  <div className={styles.seatInfoBookingSeat}><img alt="" src="/img/bookingSeat.png" /> 선택한 좌석 </div>
                  <div className={styles.seatInfoBookedSeat}><img alt="" src="/img/bookedSeat.png" /> 선택 불가 좌석 </div>
              </div>
          </div>
        </div>

        <div className={styles.seatInnerRightDown}>
          <div className={styles.passengerName}>
            <p>탑승객명</p>
            {/* <h5 th:each="passenger : ${booking.passengerNames}">
              <span th:text="${passenger}"></span>
            </h5> */}
          </div>
          
          <br />

          <div className={styles.pasCount}>
            <p>인원 수</p>
            <p>{pasCount}명</p>
          </div>

          <br />

          <div className={styles.goSeat}>가는 편 좌석
            <input type="text" style={{padding: "0", height: "17px"}} readOnly />
          </div>

        </div>
      </div>

      
      {renderButton()}

    </div>
  )
}

export default Seat