import axios from "axios";

// 회원 정보 수정
export const update 
             = (id, password, name, phone, email, address) => 
             axios.put("/user", {id, password, name, phone, email, address})
