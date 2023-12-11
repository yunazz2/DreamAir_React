import React, { useContext, useEffect, useState } from 'react'
import NoticeForm from '../../components/booking/NoticeForm'
import * as bookingAPI from '../../apis/booking'
import { BookingContext } from '../../contexts/BookingContextProvider'

const NoticeContainer = () => {

    const {booking, setBooking} = useContext(BookingContext)
    
    const [roundTrip, setRoundTrip] = useState(booking.roundTrip) 
    const [pasCount, setPasCount] = useState(booking.pasCount)
    const [passengerNames, setPassengerNames] = useState('테스트2');
    const [phones, setPhones] = useState('010123456');
    const [seatNoDeps, setseatNoDepss] = useState('A1');
    const [seatNoDess, setseatNoDess] = useState('Al');
    const [goBookingList, setGoBookingList] = useState([]);
    const [comeBookingList, setComeBookingList] = useState([]);


    const getSelectedFlight = async () => {
        const response = await bookingAPI.getNotice(roundTrip, pasCount, passengerNames, phones, seatNoDeps, seatNoDess)
        const data = await response.data
        console.log(data);
        if (roundTrip === '편도') {
            setGoBookingList(data)
        } else {
            setGoBookingList(data.goBookingList)
            setComeBookingList(data.comeBookingList)
        }
    }
    
    useEffect(() => {
        getSelectedFlight()
    }, [])


    return (
        <div>
            <NoticeForm 
                        goBookingList={goBookingList}
                        comeBookingList={comeBookingList}
            />
        </div>
    )
}

export default NoticeContainer
