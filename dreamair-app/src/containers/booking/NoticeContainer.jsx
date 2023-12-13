import React, { useContext, useEffect, useState } from 'react'
import NoticeForm from '../../components/booking/NoticeForm'
import * as bookingAPI from '../../apis/booking'
import { BookingContext } from '../../contexts/BookingContextProvider'
import Header from '../../components/fragment/Header';
import Footer from '../../components/fragment/Footer';

const NoticeContainer = () => {
    
    const {booking, setBooking} = useContext(BookingContext)

    console.log("notice");
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

        const result = await bookingAPI.getNotice(params)
        const data = await result.data
        console.log(data);
        if (roundTrip === '편도') {
            console.log("편도")
            setGoBookingList(data.goBookingList)
            const userNo = data.user.userNo
            const userNo2 = data.user.userNo2
            setBooking({...booking, userNo, userNo2})
        } else {
            console.log("왕복")
            setGoBookingList(data.goBookingList)
            setComeBookingList(data.comeBookingList)
            const userNo = data.user.userNo
            const userNo2 = data.user.userNo2
            setBooking({...booking, userNo, userNo2})
        }
    }
    
    useEffect(() => {
        getSelectedFlight()
    }, [])


    return (
        <div>
            <Header/>
            <div className="container">
                <NoticeForm 
                            goBookingList={goBookingList}
                            comeBookingList={comeBookingList}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default NoticeContainer
