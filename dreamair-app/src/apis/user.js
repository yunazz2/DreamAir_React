import axios from "axios";

// 회원 정보 조회 - id
export const selectById = (id) => axios.get(`/user/${id}`)

// 회원 정보 수정
export const update 
             = (id, password, name, phone, email, address) => 
             axios.put("/user", {id, password, name, phone, email, address})
