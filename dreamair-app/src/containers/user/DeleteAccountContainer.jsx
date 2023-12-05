import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as users from '../../apis/user'
import DeleteAccount from '../../components/user/DeleteAccount'

// ⛄ 회원 탈퇴
const DeleteAccountContainer = () => {

  const {userId} = useParams()

  const navigate = useNavigate()

  const onDelete = async (userId) => {
    const response = await users.deleteAccount(userId);
    console.log(response.data);

    alert('회원 탈퇴 완료')
    
    // 👉 인덱스로 이동
    navigate('/')
  }
  

  return (
    <>
      <DeleteAccount userId={userId} onDelete={onDelete} />
    </>
  )
}

export default DeleteAccountContainer