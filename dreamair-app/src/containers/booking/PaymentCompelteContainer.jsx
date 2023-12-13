import React from 'react'
import PaymentComplete from '../../components/booking/PaymentComplete'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'

const PaymentCompelteContainer = () => {
    return (
        <>
            <Header />
            <div className="container" style={{minHeight:"400px"}}>
                <PaymentComplete />
            </div>
            <Footer />
        </>
    )
}

export default PaymentCompelteContainer
