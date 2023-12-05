import axios from 'axios';

// 목록
export const list = () => axios.get("/qr")

// 조회
export const select = (qrNo) => axios.get(`/qr/${qrNo}`)

// 등록
export const insert = (parent_table, parent_no, url, name, file_path, file_size) => axios.post("/qr", {parent_table, parent_no, url, name, file_path, file_size})

// 수정
export const update = (qrNo, parent_table, parent_no, url, name, file_path, file_size) => axios.put("/qr", {qrNo, parent_table, parent_no, url, name, file_path, file_size})

// 삭제
export const remove = (qrNo) => axios.delete(`/qr/${qrNo}`)

// qr 이미지
export const qrImg = (qrNo) => axios.get(`/qr/img/${qrNo}`)