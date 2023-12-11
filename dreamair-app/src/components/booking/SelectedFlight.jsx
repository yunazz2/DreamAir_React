import React, { useContext } from 'react'
import { Form, Table } from 'react-bootstrap'
import { BookingContext } from '../../contexts/BookingContextProvider'

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
                            goBookingList.map((bookingItem) => (
                                <tr key={bookingItem.passengerNo}>
                                <td>{`${bookingItem.departure} → ${bookingItem.destination}`}</td>
                                <td>{bookingItem.flightName}</td>
                                <td>{bookingItem.departureDate}</td>
                                <td>{bookingItem.destinationDate}</td>
                                <td>일반석</td>
                                <td>{bookingItem.productPrice}</td>
                                <td>{bookingItem.seatNoDep}</td>
                                <td>{bookingItem.passengerName}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </section>  

            {comeBookingList && 
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


                            {comeBookingList.map((bookingItem) => (
                                <tr key={bookingItem.passengerNo}>
                                <td>{`${bookingItem.departure} → ${bookingItem.destination}`}</td>
                                <td>{bookingItem.flightName}</td>
                                <td>{bookingItem.departureDate}</td>
                                <td>{bookingItem.destinationDate}</td>
                                <td>일반석</td>
                                <td>{bookingItem.productPrice}</td>
                                <td>{bookingItem.seatNoDes}</td>
                                <td>{bookingItem.passengerName}</td>
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
