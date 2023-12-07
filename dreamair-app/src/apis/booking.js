import axios from "axios";

// 항공권 조회 목록
export const list = (roundTrip, departure, destination, departureDate, pasCount ) => axios.get("/booking/list", { params : { roundTrip, departure, destination, departureDate, pasCount }})