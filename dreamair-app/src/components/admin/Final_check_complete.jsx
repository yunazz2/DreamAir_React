import React from 'react'
import { Link } from 'react-router-dom'

const Final_check_complete = ({ ticketNo }) => {
  return (
    <div className="container mt-5">
      <div className="content_container text-center">
          <i className="fa-regular fa-circle-check"></i>
          <h3 className='text-center'>TicketNo : {ticketNo} </h3>
          <h1 className="my-3">최종 탑승 확인이 완료 되었습니다.</h1>
          <div className="d-flex justify-content-center align-center">
            <button className='btn btn-secondary btn-basic'  style={{width: '400px', height: '50px'}} ><Link to="/admin/ticket_list">목록으로 이동</Link></button>
          </div>
      </div>
    </div>
  )
}

export default Final_check_complete