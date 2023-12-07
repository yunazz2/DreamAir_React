import React, { useEffect, useState } from 'react'
import NoticeForm from '../../components/booking/NoticeForm'
import * as booking from '../../apis/booking'

const NoticeContainer = () => {

    const [roundTrip, setRoundTrip] = useState('편도') 
    const [pasCount, setPasCount] = useState(1)
    const [passengerNames, setPassengerNames] = useState('테스트1');
    const [phones, setPhones] = useState('010123456');
    const [seatNoDeps, setseatNoDeps] = useState('A1');
    const [goBookingList, setGoBookingList] = useState([]);
    const [comeBookingList, setComeBookingList] = useState([]);


    const getSelectedFlight = async () => {
        const response = await booking.getNotice(roundTrip, pasCount, passengerNames, phones, seatNoDeps)
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
