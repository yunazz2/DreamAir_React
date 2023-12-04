import axios from "axios";

// 회원 정보 조회 - id
export const selectById = (userId) => axios.get(`/user/${userId}`)

// 회원 정보 수정
export const update 
             = (userId, userPw, name, phone, email, address) => 
             axios.put("/user", {userId, userPw, name, phone, email, address})
