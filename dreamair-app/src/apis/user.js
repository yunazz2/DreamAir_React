import axios from "axios";

// 회원 정보 조회 - id
export const selectById = (userId) => axios.get(`/user/${userId}`)

// 회원 정보 수정
export const update 
             = (userId, userPw, name, phone, email, address) => 
             axios.put("/user", {userId, userPw, name, phone, email, address})

// 마일리지 조회
export const selectMileage = (userId) => axios.get(`/user/${userId}`)

// 회원 탈퇴
export const deleteAccount = (userId) => axios.delete(`/user/${userId}`)

// 예매 내역 조회 - 회원
export const selectBookingListByUser = (userId) => axios.get(`/user/bookingList/${userId}`)

// 예매 내역 조회 - 비회원
export const selectBookingListByGuest = (phone, userPw) => axios.post("/user/bookingList/guest", {phone, userPw})

// 티켓 상세 조회
export const viewTicket = (ticketNo, userId) => axios.get(`/user/booking/ticketInfo/${ticketNo}?userId=${userId}`);

// 출도착 항공편 조회
export const productFlightList = () => axios.get('/user/productFlightList')

// 체크인
export const selectTicketList = (ticketNo, userId) => axios.get(`/user/checkin?ticketNo=${ticketNo}&userId=${userId}`);

// 체크인 처리
export const checkIn = (ticketNo, userId) => axios.post("/user/checkin", { ticketNo, userId })
