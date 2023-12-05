import React from 'react'
import * as admin from '../../apis/admin'
import AdminInsertForm from '../../components/admin/AdminInsertForm'
import { useNavigate } from 'react-router-dom'

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
      <AdminInsertForm onInsert={onInsert} />
    </>
  )
}

export default AdminInsertContainer