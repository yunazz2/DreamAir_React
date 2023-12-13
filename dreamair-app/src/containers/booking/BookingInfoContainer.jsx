import React, { useState } from 'react'
import InfoForm from '../../components/booking/InfoForm'
import { useNavigate } from 'react-router-dom'
import * as bookingAPI from '../../apis/booking'
import Header from '../../components/fragment/Header';
import Footer from '../../components/fragment/Footer';

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
            <Header/>
            <div className="container">
                <InfoForm onInsert={onInsert} />
            </div>
            <Footer/>
        </div>
    )
}

export default BookingInfoContainer
