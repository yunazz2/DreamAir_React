import axios from 'axios';

// 회원 가입
export const insert
             = (userId, userPw, userPwCheck, name, phone, email, address) =>
             axios.post("/", {userId, userPw, userPwCheck, name, phone, email, address})


// 로그인
export const signIn = (userId, userPw) => axios.get("/", {userId, userPw})