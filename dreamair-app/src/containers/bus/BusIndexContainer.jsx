import React from 'react'
import Index from '../../components/bus/Index'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'

const BusIndexContainer = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <Index/>
    </div>
   <Footer/>
   </>
  )
    }

export default BusIndexContainer