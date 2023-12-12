import axios from "axios";

// 가는편 항공권 조회 목록
export const goList = (roundTrip, departure, destination, departureDate, pasCount ) => axios.get("/booking/goList", { params : { roundTrip, departure, destination, departureDate, pasCount } })

// 오는편 항공권 조회 목록
export const comeList = (roundTrip, departure, destination, departureDate, pasCount ) => axios.get("/booking/comeList", { params : { roundTrip, departure, destination, departureDate, pasCount } })

// 가는 편 좌석 현황
export const selectDepSeatStatus = (booking) => axios.get(`/booking/seat?productNoDeps=${booking.productNoDeps}`)

// 오는 편 좌석 현황
export const selectDesSeatStatus = (booking) => axios.get(`/booking/seat_rt?departure=${booking.departure}&destination=${booking.destination}`)

// 예매 완료된 좌석 현황 불러오기
export const bookedSeatList = (flightNo) => axios.get(`/booking/seatStatus/${flightNo}`)

// 탑승객 정보 입력
export const info = (booking) => axios.post("/booking/info", booking )

// 선택한 항공권 조회
export const getNotice = (params) => axios.get("/booking/notice", { params : params })

// 결제 정보 조회
export const getPayment = (params) => axios.get("/booking/payment", { params : params })

// 결제 후 처리
export const bookingInsert = (booking) => axios.post("/booking/bookingInsert", booking)
