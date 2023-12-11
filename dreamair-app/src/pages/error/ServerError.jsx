import React from 'react'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'

// TODO : 500 페이지 꾸미기
const ServerError = () => {
  return (

      <>
        <Header />
        {/* FIXME: 여기 꾸며줘 
        */}
        <div className=''>
            <h1>500 Page</h1>
        </div>
      <Footer />
    </>
  )
}

export default ServerError