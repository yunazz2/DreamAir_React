import React from 'react'
import FinalCheckComplete from '../../components/admin/Final_check_complete'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'
import { useParams } from 'react-router-dom'

const FinalCheckCompleteContainer = () => {

    const {ticketNo} = useParams();

  return (
    <>
    <Header/>
    <div className='d-flex'>
      <Adminsidebar/>
      <FinalCheckComplete ticketNo={ticketNo}/>  
    </div>
    <Adminfooter/>
    </>
  )
}

export default FinalCheckCompleteContainer