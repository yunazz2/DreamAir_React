import api from "./api";


// 로그인
export const login = (username, password) => api.post(`/login?username=${username}&password=${password}`, );

// 사용자 정보
export const info = () => api.get("/user/info");

// 회원가입
export const join = (data) => api.post("/user", data)

// 회원 정보 수정
export const update = (data) => api.put("/user", data)

// 회원탈퇴
export const remove = (userId) => api.delete(`/user/${userId}`)


