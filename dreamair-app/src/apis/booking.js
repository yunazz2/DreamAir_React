import axios from "axios";

// 항공권 조회 목록
export const list = (roundTrip, departure, destination, departureDate, pasCount ) => axios.get("/booking/list", { params : { roundTrip, departure, destination, departureDate, pasCount } })

// 좌석 선택 창 진입 시, 예매 완료된 좌석 현황 불러오기
export const bookedSeatList = (flightNo) => axios.get(`/booking/seatStatus/${flightNo}`)

// 테스트
export const selectSeatStatus = (booking) => axios.get("/booking/seat", { params: booking })

// 선택한 항공권 조회
export const getNotice = (roundTrip, pasCount, passengerNames, phones, seatNoDeps) => axios.get("/booking/notice", { params : { roundTrip, pasCount, passengerNames, phones, seatNoDeps } })

// 결제 정보 조회
export const getPayment = (roundTrip, pasCount, passengerNames, phones, seatNoDepss, payment) => axios.get("/booking/payment", { params : { roundTrip, pasCount, passengerNames, phones, seatNoDepss, payment } })
