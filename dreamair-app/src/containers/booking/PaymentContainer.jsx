import React, { useContext, useEffect, useState } from 'react'
import Payment from '../../components/booking/Payment'
import * as bookingAPI from '../../apis/booking'
import { BookingContext } from '../../contexts/BookingContextProvider'
import { useNavigate } from 'react-router-dom'

const PaymentContainer = () => {

    const navigate = useNavigate()

    const {booking, setBooking} = useContext(BookingContext)
    console.log("payment");
    console.log(booking);

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
            'seatNoDepss' : seatNoDepss.join(","), 
            'seatNoDesss' : seatNoDesss.join(","), 
            'payment' : payment
        }

        const response = await bookingAPI.getPayment( params )
        const data = await response.data
        console.log(data);
        if (roundTrip === '편도') {
            setGoBookingList(goBookingList)
        } else {
            setGoBookingList(data.goBookingList)
            setComeBookingList(data.comeBookingList)
        
        }
    }
    
    useEffect(() => {
        getSelectedFlight()
    }, [])

    const bookingInsert = async (params) => {
        try {
            const response = await bookingAPI.bookingInsert(params)
            console.log(response.data);
            navigate('/booking/payment_complete')

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <Payment goBookingList={goBookingList} comeBookingList={comeBookingList} bookingInsert={bookingInsert} />
        </div>
    )
}

export default PaymentContainer