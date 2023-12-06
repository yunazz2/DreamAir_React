import axios from "axios";

// 항공권 조회 목록
export const list = () => axios.get("/booking/list")

// 티켓 상세 조회