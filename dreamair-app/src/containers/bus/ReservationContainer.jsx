import React from 'react'
import Reservation from '../../components/bus/Reservation'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'

const ReservationContainer = () => {
  
  return (
    <>
    <Header/>
    <div className='container'>
      <Reservation/>
    </div>
    <Footer/>
    </>
  )
}

export default ReservationContainer