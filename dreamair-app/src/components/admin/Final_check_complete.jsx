import React from 'react'

const Final_check_complete = ({ ticketNo }) => {
  return (
    <div className="content_container text-center">
        <i className="fa-regular fa-circle-check"></i>
        <h3 className='text-center'>TicketNo : {ticketNo} </h3>
        <h1 className="my-3">최종 탑승 확인이 완료 되었습니다.</h1>
    </div>
  )
}

export default Final_check_complete