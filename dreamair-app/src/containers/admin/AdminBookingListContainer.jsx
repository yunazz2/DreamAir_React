import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import AdminBookingList from '../../components/admin/AdminBookingList'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const AdminBookingListContainer = () => {

  const [AdminbookingList, setAdminBookingList] = useState([]);

  const getAdminBookingList = async () => {
    const response = await admin.booking_list(); 
    const data = await response.data;
    console.log(data);
    setAdminBookingList(data);
  };

  useEffect(() => {
    getAdminBookingList();
}, [])


return (
<>
    <Header/>
    <div className='d-flex'>
      <Adminsidebar/>
      <AdminBookingList AdminbookingList = {AdminbookingList}/>
    </div>
    <Adminfooter/> 
</>
)
}

export default AdminBookingListContainer