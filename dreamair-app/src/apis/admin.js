import axios from 'axios';

 // 전체 관리자 조회
 export const admin_list = () => axios.get("/admin")

 // 관리자 등록
 export const admin_insert = (adminId, adminPw) => axios.post("/admin", {adminId, adminPw})

 // 관리자 삭제
 export const admin_delete = (adminNo) => axios.delete(`/admin/${adminNo}`)

 // 전체 사용자 조회
 export const user_list = () => axios.get("/admin/user_list")
 
 // 사용자 등록
 export const user_insert = (userId, userPw, name, address, phone, email, regDate, updDate, status) => axios.post("/admin/user_list", {userId, userPw, name, address, phone, email, regDate, updDate, status})
 
 // 사용자 수정
 export const user_update = (userNo, userId, userPw, name, address, phone, email, regDate, updDate, status) => axios.put("/admin/user_list", {userNo, userId, userPw, name, address, phone, email, regDate, updDate, status})
 
 // 사용자 삭제
 export const user_delete = (userNo) => axios.delete(`/admin/user_list/${userNo}`)

 // 전체 예매 내역 조회
 export const booking_list = () => axios.get("/admin/booking_list")

 // 항공권 번호로 당일의 탑승객 조회
 // ✅ [GET] 요청 시, 파라미터는 2번째 인자에 { params: {} } 형태로 전송
 export const ticket_selectList = (flightNo, select) => axios.get("/admin/ticket_list", { params: {flightNo, select} })
 export const ticket_selectList_w = () => axios.get("/admin/ticket_list")

 // 탑승권 목록 내역 조회(전체)
 export const ticket_list = () => axios.get('/admin/ticket_list')

 // 탑승권 조회 - ticketNo
 export const pas_ticketList = (ticketNo) => axios.get(`/admin/Final_check/${ticketNo}`)