import React from 'react'
import { Form, Table } from 'react-bootstrap'

const SelectedFlight = ( { goBookingList, comeBookingList } ) => {
    return (
        <div>
            <section>
                <h2>가는편</h2>
                <Table striped bordered hover className="text-center align-middle">

                    <thead>
                    <tr>
                        <th>여정</th>
                        <th>항공편</th>
                        <th>출발일시</th>
                        <th>도착일시</th>
                        <th>좌석구분</th>
                        <th>요금</th>
                        <th>요청좌석</th>
                        <th>이름</th>
                    </tr>
                    </thead>

                    <tbody>
                        {goBookingList && goBookingList.length === 0 && (
                            <tr>
                                <td colSpan="8">조회된 항공권이 없습니다.</td>
                            </tr>
                        )}
                        
                        {goBookingList &&
                            goBookingList.map((booking) => (
                                <tr key={booking.passengerNo}>
                                <td>{`${booking.departure} → ${booking.destination}`}</td>
                                <td>{booking.flightName}</td>
                                <td>{booking.departureDate}</td>
                                <td>{booking.destinationDate}</td>
                                <td>일반석</td>
                                <td>{booking.productPrice}</td>
                                <td>{booking.seatNoDep}</td>
                                <td>{booking.passengerName}</td>
                                {/* <Form.Control type="hidden" name="passengerNames" value={bookingInfo.passengerName} />
                                <Form.Control type="hidden" name="passengerNos" value={bookingInfo.passengerNo} />
                                <Form.Control type="hidden" name="phones" value={bookingInfo.phone} />
                                <Form.Control type="hidden" name="seatNoDepss" value={bookingInfo.seatNoDep} /> */}
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </section>  

            {comeBookingList == null && 
                <section>
                    <h2>오는편</h2>
                    <Table striped bordered hover className="text-center align-middle">
                        <thead>
                        <tr>
                            <th>여정</th>
                            <th>항공편</th>
                            <th>출발일시</th>
                            <th>도착일시</th>
                            <th>좌석구분</th>
                            <th>요금</th>
                            <th>요청좌석</th>
                            <th>이름</th>
                        </tr>
                        </thead>

                        <tbody>

                            {comeBookingList && comeBookingList.length === 0 && (
                                <tr>
                                    <td colSpan="8">조회된 항공권이 없습니다.</td>
                                </tr>
                            )}


                            {comeBookingList.map((booking) => (
                                <tr key={booking.passengerNo}>
                                <td>{`${booking.departure} → ${booking.destination}`}</td>
                                <td>{booking.flightName}</td>
                                <td>{booking.departureDate}</td>
                                <td>{booking.destinationDate}</td>
                                <td>일반석</td>
                                <td>{booking.productPrice}</td>
                                <td>{booking.seatNoDes}</td>
                                <td>{booking.passengerName}</td>
                                {/* <Form.Control type="hidden" name="seatNoDesss" value={bookingInfo.seatNoDes} /> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </section>
            }
        </div>
    )
}

export default SelectedFlight
