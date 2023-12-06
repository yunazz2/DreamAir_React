import React from 'react'

const FinalCheck = ({pasTicketList, QR, ticket, ticketNo}) => {

  return (
    <div className='container'>
      <h1 className="text-center my-5">탑승권 관리 - 탑승 처리</h1>
        {pasTicketList.map((ticket) => (
          <div key={ticket.ticketNo} className="boarding-pass" style={{ width: '1200px', height: '300px' }}>
            {/* Left Section */}
            <div className="left-section">
              <div className="section airline-logo"><img src="/img/BlueNameLogo.png" alt="로고이미지" style={{ width: '130px', height: '30px' }} /></div>
              <hr />
              <div className="section flight-details">
                <div className="flight-detail-item"><strong>TicketNo : </strong>{ticket.ticketNo}</div>
                <div className="flight-detail-item"><strong>FlightNo : </strong>{ticket.flightNo}</div>
                <div className="flight-detail-item"><strong>Departure Date : </strong>{ticket.departureDate}</div>
                <div className="flight-detail-item"><strong>Boarding time : </strong>{ticket.boardingTime}</div>
                <div className="flight-detail-item"><strong>Gate : </strong>A1</div>
              </div>
              <hr />
              <div className="section passenger-details">
                <div className="passenger-detail-item"><strong>Passenger : </strong>{ticket.passengerName}</div>
                <div className="passenger-detail-item"><strong>Seat : </strong>{ticket.seatNo}</div>
                <div className="passenger-detail-item"><strong>Class : </strong>Economy</div>
              </div>
              {/* QR 코드 */}
              <div className="QRcode">
                <a href={QR.url} target="_blank" style={{ textDecoration: 'none' }}>
                  <img src={`/qr/img?qrNo=${QR.qrNo}`} alt="QR코드" />
                </a>
              </div>
              <div className="boarding-pass-footer">
                <p>Boarding gate closes <span style={{ color: 'red' }}>10 minutes</span> prior to departure time.</p>
              </div>
            </div>
            {/* Right Section */}
            <div className="right-section">
              <div className="section"><strong>{ticket.departure} to {ticket.destination}</strong></div>
              <div className="section"><strong>Departure : </strong>{ticket.departureDate} {ticket.departureTime}</div>
              <div className="section"><strong>Seat : </strong>{ticket.seatNo}</div>
              <div className="section"><strong>Class : </strong>Economy</div>
              <div className="section"><img src="/img/logo.png" alt="로고이미지" style={{ width: '30px', height: '30px' }} /></div>
            </div>
          </div>
        ))}
        <div className="btn-box d-grid gap-2">
           <button type="submit" className="btn btn-outline-primary btn-lg">탑승 완료</button>
        </div>
      </div>
  );
};



export default FinalCheck