import React, { useContext, useEffect, useState } from 'react'
import styles from './Seat.module.css'
import Swal from "sweetalert2";
import { BookingContext } from '../../contexts/BookingContextProvider';
import { useNavigate } from 'react-router';

const SeatRt = ({bookingObject, isLoading}) => {

  // notice 페이지로 넘겨야 할 값 : phone, passengerNames, selectedSeats, goFlightNo, comeFlightNo
  const {booking, setBooking} = useContext(BookingContext);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatStatus = bookingObject;

  const navigate = useNavigate();

  // 선택 완료 버튼
  const handleCompleteClick = () => {
    setBooking({ ...booking, seatNoDesss: selectedSeats.join(', ') });
    // selectedSeats(선택된 좌석 정보)를 seatNoDess(오는 편 좌석) 변수에 저장
    navigate('/booking/notice');
  };

  // 선택된 좌석 정보
  const handleCheckboxChange = (seatNo) => {
    const updatedSeats = selectedSeats.includes(seatNo)
      ? selectedSeats.filter((selectedSeat) => selectedSeat !== seatNo)
      : selectedSeats.length < booking.pasCount
      ? [...selectedSeats, seatNo]
      : selectedSeats;

    setSelectedSeats(updatedSeats);
  };

  // seatStatus 로딩 시, 예매 완료된 좌석을 유저가 선택했다면 해당 좌석 checked 속성 제거
  useEffect(() => {
    const updatedSelectedSeats = selectedSeats.filter((seatNo) => {
      const seat = seatStatus.find((seat) => seat.seatNo === seatNo);
      if (seat && seat.status == 1) {
        Swal.fire({
          icon: 'error',
          title: '예매가 완료된 좌석입니다.',
          text: `좌석 ${seat.seatNo}은(는) 이미 예매가 완료되었습니다.`,
        });
        return false; // 해당 좌석 제거
      }
      return true; // 다른 좌석은 유지
    });
    setSelectedSeats(updatedSelectedSeats);
  }, [seatStatus]);
  
  // 화면
  return (
    <div className={styles.wrap}>
      <div className={styles.seatContent}>
          <h1 style={{ textAlign: 'center' }}>좌석 선택</h1>
        <div className={styles.seatHeader}>

          <br />
          
          <div className="img_container text-center">
            <img src="/img/select_seat.png" alt="좌석선택" />
          </div>
        </div>

        <div className={styles.seatHeader2}>
          <h2>오는 편</h2>
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
                                  onChange={(e) => {
                                    handleCheckboxChange(seat.seatNo);
                                    e.target.checked = selectedSeats.includes(seat.seatNo); // input 태그의 checked 속성 업데이트
                                  }}
                                />
                              )}
                              <label htmlFor={`seat-${seat.seatNo}`}></label>
                              {(index + 1) % 4 === 0 && <br />} {/* 4열마다 줄바꿈 */}
                            </React.Fragment>
                          ))}
                        </div>
                    ) : (
                      <center>  {/* 로딩 이미지 */}
                        <img src="/img/loading.gif" alt="loading" className={styles.loadingImg}/>
                      </center>
                    )}
                  </div>
                </div>
            </div>
          </div>
          
          <div className={styles.seatInnerRight}>
            <div className={styles.seatInnerRightTop}>
                <div className={styles.seatInfo}>
                    <div className={styles.seatInfoBookSeat}><img alt="선택 가능 좌석" src="/img/bookableSeat.png" /> 선택 가능 좌석 </div>
                    <div className={styles.seatInfoBookingSeat}><img alt="선택한 좌석" src="/img/bookingSeat.png" /> 선택한 좌석 </div>
                    <div className={styles.seatInfoBookedSeat}><img alt="선택 불가 좌석" src="/img/bookedSeat.png" /> 선택 불가 좌석 </div>
                </div>
            </div>

            <div className={styles.seatInnerRightDown}>
              <div className={styles.passengerName}>
                <p>탑승객명</p>
                {booking.passengerNames && booking.passengerNames.map((passenger, index) => (
                  <h4 key={index}>{passenger}</h4>
                ))}
              </div>

              <br />
            
              <div className={styles.pasCount}>
                <p>인원 수</p>
                <p>{booking.pasCount}명</p>
              </div>

              <br />

              <div className={styles.backSeat}>오는 편 좌석
                <input type="text"
                className={styles.seatNoDess}
                id="seatNoDess"
                style={{padding: "0", height: "17px"}}
                value={selectedSeats.join(', ')} // 선택된 좌석 번호 출력
                readOnly />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttonBox}>
          <button type="button" className={styles.bottomButton} id="btn" onClick={handleCompleteClick}>
            선택 완료
          </button>
        </div>

      </div>
    </div> 
  )
}

export default SeatRt