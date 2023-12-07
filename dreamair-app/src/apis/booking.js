import axios from "axios";

// 항공권 조회 목록
export const list = (roundTrip, departure, destination, departureDate, pasCount ) => axios.get("/booking/list", { params : { roundTrip, departure, destination, departureDate, pasCount } })

// 선택한 항공권 조회
export const getNotice = (roundTrip, pasCount, passengerNames, phones, seatNoDeps) => axios.get("/booking/notice", { params : { roundTrip, pasCount, passengerNames, phones, seatNoDeps } })

// 결제 정보 조회
export const getPayment = (roundTrip, pasCount, passengerNames, phones, seatNoDeps, payment) => axios.get("/booking/notice", { params : { roundTrip, pasCount, passengerNames, phones, seatNoDeps, payment } })