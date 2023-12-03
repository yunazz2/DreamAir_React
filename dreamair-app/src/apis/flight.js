import axios from 'axios';

// 항공기 전체 조회
export const flight_list = () => axios.get("/flight")

// 항공기 정보 조회
export const flight_select = (flightNo) => axios.get(`/flight/${flightNo}`)

// 항공기 정보 등록
export const flight_insert = (flightName, routeNo, setMax) => axios.post("/flight", {flightName, routeNo, setMax})

// 항공기 정보 수정
export const flight_update = (flightNo, flightName, routeNo, setMax) => axios.put("/flight", {flightNo, flightName, routeNo, setMax})

// 항공기 정보 삭제
export const flight_delete = (flightNo) => axios.delete(`/flight/${flightNo}`)