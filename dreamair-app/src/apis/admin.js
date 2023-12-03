import axios from 'axios';

 // 전체 사용자 조회
 export const user_list = () => axios.get("/admin/user_list")

 // 전체 예매 내역 조회
 export const booking_list = () => axios.get("/admin/booking_list")

 // 항공권 번호로 당일의 탑승객 조회
 export const ticket_selectList = (flightNo) => axios.get(`/admin/ticket_list/${flightNo}`)
 export const ticket_selectList_w = () => axios.get("/admin/ticket_list")

 // 탑승권 목록 내역 조회(전체)
 export const ticket_list = () => axios.get('/admin/ticket_list')

 // 탑승권 조회 - ticketNo
 export const pas_ticketList = (ticketNo) => axios.get(`/admin/Final_check/${ticketNo}`)