import React from 'react'
import styles from './Seat.module.css'
import Swal from "sweetalert2";
import { useLocation } from 'react-router-dom';

const SeatRt = () => {

  const location = useLocation();
  const userInfo = { ...location.state };

  console.log(userInfo);

  return (
    <div>SeatRt</div>
  )
}

export default SeatRt