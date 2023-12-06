import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import AdminBookingList from '../../components/admin/AdminBookingList';
import AdminLayout from '../layout/AdminLayout';

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
<AdminLayout>
  <AdminBookingList AdminbookingList = {AdminbookingList}></AdminBookingList>
</AdminLayout>
</>
)
}

export default AdminBookingListContainer