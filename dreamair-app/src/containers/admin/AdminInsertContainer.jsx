import React from 'react'
import * as admin from '../../apis/admin'
import AdminInsertForm from '../../components/admin/AdminInsertForm'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const AdminInsertContainer = () => {

  const navigate = useNavigate()

  const onInsert = async (adminId, adminPw) => {
    try{
      const response = await admin.admin_insert(adminId, adminPw)
      alert('등록 완료')
      console.log(response.data);

      navigate('/admin')
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
        <Header/>
        <div className='d-flex'>
          <Adminsidebar/>
          <div className="admin_container">
            <AdminInsertForm onInsert={onInsert} />
          </div>
        </div>
        <Adminfooter/> 
    </>
  )
}

export default AdminInsertContainer