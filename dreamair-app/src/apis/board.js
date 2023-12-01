import axios from 'axios';

// 목록
export const list = () => axios.get("/board")

// 조회
export const select = (boardNo) => axios.get(`/board/${boardNo}`)

// 등록
export const insert = (title, writer, content) => axios.post("/board", {title, writer, content})

// 수정
export const update = (boardNo, title, writer, content) => axios.put("/board", {boardNo, title, writer, content})

// 삭제
export const remove = (boardNo) => axios.delete(`/board/${boardNo}`)

// 메인 이미지 목록
export const mainList = () => axios.get("/")