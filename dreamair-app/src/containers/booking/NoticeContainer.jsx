import React, { useContext, useEffect, useState } from 'react'
import NoticeForm from '../../components/booking/NoticeForm'
import * as bookingAPI from '../../apis/booking'
import { BookingContext } from '../../contexts/BookingContextProvider'

const NoticeContainer = () => {
    
    const {booking, setBooking} = useContext(BookingContext)

    console.log(booking);
    
    const [roundTrip, setRoundTrip] = useState(booking.roundTrip) 
    const [pasCount, setPasCount] = useState(booking.pasCount)
    const [passengerNames, setPassengerNames] = useState(booking.passengerNames);
    const [phones, setPhones] = useState(booking.phones);
    const [seatNoDeps, setseatNoDepss] = useState(booking.seatNoDepss);                    
    const [seatNoDess, setseatNoDess] = useState(booking.seatNoDesss);             
    const [goBookingList, setGoBookingList] = useState([]);
    const [comeBookingList, setComeBookingList] = useState([]);


    const getSelectedFlight = async () => {

        let params = { 
            'roundTrip' : roundTrip, 
            'pasCount' : pasCount, 
            'passengerNames' : passengerNames.join(","), 
            'phones' : phones.join(","), 
            'seatNoDeps' : seatNoDeps, 
            'seatNoDess' : seatNoDess, 
        }

        const response = await bookingAPI.getNotice(params)
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
