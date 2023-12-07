import React, { useEffect, useState } from 'react'
import Payment from '../../components/booking/Payment'
import * as booking from '../../apis/booking'

const PaymentContainer = () => {

    // const [roundTrip, setRoundTrip] = useState('편도') 
    // const [pasCount, setPasCount] = useState(1)
    // const [passengerNames, setPassengerNames] = useState('테스트1');
    // const [phones, setPhones] = useState('010123456');
    // const [seatNoDeps, setseatNoDeps] = useState('A1');
    // const [goBookingList, setGoBookingList] = useState([]);
    // const [comeBookingList, setComeBookingList] = useState([]);
    // const [payment, setPayment] = useState('확인')

    // const getSelectedFlight = async () => {
    //     const response = await booking.getPayment(roundTrip, pasCount, passengerNames, phones, seatNoDeps, payment)
    //     const data = await response.data
    //     console.log(data);
    //     if (roundTrip === '편도') {
    //         setGoBookingList(data)
    //     } else {
    //         setGoBookingList(data.goBookingList)
    //         setComeBookingList(data.comeBookingList)
    //     }
    // }
    
    // useEffect(() => {
    //     getSelectedFlight()
    // }, [])


    return (
        <div>
            <Payment />
        </div>
    )
}

export default PaymentContainer