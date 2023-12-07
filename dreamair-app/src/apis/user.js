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

// 출도착 항공편 조회
export const productFlightList = () => axios.get('/user/productFlightList')
