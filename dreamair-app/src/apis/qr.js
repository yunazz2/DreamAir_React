import axios from 'axios';

export const qrImg = (qrNo) => axios.get(`/qr/img/${adminNo}`)