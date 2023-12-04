import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as user from '../../apis/user'
import UserUpdateForm from '../../components/user/UserUpdateForm'


// ⛄ 회원 정보 수정
const UserUpdateContainer = () => {

  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const onUpdate = async(id, password, name, phone, email, address) => {
    try {
      console.log('수정 완료')

      // 👉 마이 페이지로 이동
      navigate('/user')
    }
    catch(e) {
      console.log(e);
    }
  }
  
  return (
    <>
      <UserUpdateForm/>
    </>
  )
}

export default UserUpdateContainer