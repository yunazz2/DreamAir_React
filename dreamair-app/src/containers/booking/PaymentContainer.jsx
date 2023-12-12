import React, { useContext, useEffect, useState } from 'react'
import Payment from '../../components/booking/Payment'
import * as bookingAPI from '../../apis/booking'
import { BookingContext } from '../../contexts/BookingContextProvider'

const PaymentContainer = () => {

    const {booking, setBooking} = useContext(BookingContext)
    console.log(booking.seatNoDepss);
    console.log(booking.seatNoDesss);

    const [roundTrip, setRoundTrip] = useState(booking.roundTrip) 
    const [pasCount, setPasCount] = useState(booking.pasCount)
    const [passengerNames, setPassengerNames] = useState(booking.passengerNames);
    const [phones, setPhones] = useState(booking.phones);
    const [seatNoDepss, setSeatNoDepss] = useState(booking.seatNoDepss);
    const [seatNoDesss, setSeatNoDesss] = useState(booking.seatNoDesss);
    const [goBookingList, setGoBookingList] = useState([]);
    const [comeBookingList, setComeBookingList] = useState([]);
    const [payment, setPayment] = useState(booking.payment)

    const getSelectedFlight = async () => {

        let params = { 
            'roundTrip' : roundTrip, 
            'pasCount' : pasCount, 
            'passengerNames' : passengerNames.join(","), 
            'phones' : phones.join(","), 
            'seatNoDepss' : seatNoDepss, 
            'seatNoDesss' : seatNoDesss, 
            'payment' : payment
        }

        const response = await bookingAPI.getPayment( params )
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
            <Payment goBookingList={goBookingList} comeBookingList={comeBookingList} />
        </div>
    )
}

export default PaymentContainer