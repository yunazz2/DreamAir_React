import React, { useEffect } from 'react'
import styles from './Seat.module.css'
import Swal from "sweetalert2";
import $ from 'jquery';

const Seat = ({pasCount, roundTrip, bookingObject, isLoading}) => {

  // useEffect(() => {
  //   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  //   const seatNoDepsInput = document.getElementById('seatNoDeps');

  //   const selectedSeats = [];

  //   checkboxes.forEach((checkbox) => {
  //     checkbox.addEventListener('change', () => {
  //       if (checkbox.classList.contains('checked')) {
  //         checkbox.classList.remove('checked');
  //         checkbox.checked = false;
  //       }

  //       // 선택된 좌석 처리 로직 추가
  //     });
  //   });

  //   const interval = setInterval(() => {
  //     // 실시간 예약 확인 로직 추가
  //   }, 30000);

  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 clearInterval
  // }, []); // useEffect의 두 번째 매개변수인 빈 배열은 컴포넌트 마운트 시에만 실행되도록 함

  const seatStatus = bookingObject.seatStatus;

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
        {/* 이 부분에서 seatStatus가 배열인지 여부와 값이 있는지를 확인하고 map 함수를 사용 */}
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
                            type='checkbox'
                            className={styles.seatBox}
                            id={`seat-${seat.seatNo}`}
                            style={{ marginRight: index % 4 === 3 ? '0' : '5px', marginBottom: '5px' }}
                            />
                          )}
                          <label htmlFor={`seat-${seat.seatNo}`}></label>
                          {(index + 1) % 4 === 0 && <br />} {/* 4열마다 줄바꿈 */}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <center>
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
          <div className={styles.passengerName}>탑승객명
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