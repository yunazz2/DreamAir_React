import React from 'react'
import CheckIn from '../../components/user/CheckIn'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

const CheckInContainer = () => {
  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <CheckIn />
      </div>
      <Footer />
    </>
  )
}

export default CheckInContainer