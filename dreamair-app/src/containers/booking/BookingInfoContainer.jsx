import React, { useState } from 'react'
import InfoForm from '../../components/booking/InfoForm'

const BookingInfoContainer = () => {
    const [pasCount, setPasCount] = useState(2);

    const booking = {
        pasCount : pasCount
    }

    return (
        <div>
            <InfoForm booking={booking} />;
        </div>
    )
}

export default BookingInfoContainer
