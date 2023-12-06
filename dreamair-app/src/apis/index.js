import axios from 'axios';

// 회원 가입
export const insert
             = (userId, userPw, userPwCheck, name, phone, email, address) =>
             axios.post("/", {userId, userPw, userPwCheck, name, phone, email, address})

// 최근 게시글 목록
export const mainList = () => axios.get("/")