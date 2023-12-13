import React, { useState } from 'react'
import InfoForm from '../../components/booking/InfoForm'
import { useNavigate } from 'react-router-dom'
import * as bookingAPI from '../../apis/booking'

const BookingInfoContainer = () => {

    const navigate = useNavigate()

    const onInsert = async (params) => {
        try {
            const response = await bookingAPI.info(params)

            console.log(response.data);

            navigate('/booking/seat')

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <InfoForm onInsert={onInsert} />;
        </div>
    )
}

export default BookingInfoContainer
