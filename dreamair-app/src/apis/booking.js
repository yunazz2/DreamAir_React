import axios from "axios";

// 항공권 조회 목록
export const list = () => axios.get("/booking/list")

// 좌석 선택 창 진입 시, 예매 완료된 좌석 현황 불러오기
export const bookedSeatList = (flightNo) => axios.get(`/booking/seatStatus/${flightNo}`)

// 테스트
export const selectSeatStatus = (booking) => axios.get("/booking/seat", { params: booking })