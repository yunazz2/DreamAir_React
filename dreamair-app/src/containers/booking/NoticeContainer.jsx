import React, { useState } from 'react'
import NoticeForm from '../../components/booking/NoticeForm'

const NoticeContainer = () => {

    const [passengerNames , setPassengerNames] = useState([]);
    const [phones , setPhones] = useState([]);
    const [goBookingList, setGoBookingList] = useState([]);
    const [comeBookingList, setComeBookingList] = useState([]);

    return (
        <div>
            <NoticeForm />
        </div>
    )
}

export default NoticeContainer
