import React from 'react'
import Login from '../components/index/Login'
import * as users from '../apis/index'
import { useNavigate } from 'react-router-dom'

// ⛄ 로그인
const LoginContainer = () => {

  const navigate = useNavigate()

  const signIn = async (userId, userPw) => {
    try {
      const response = await users.signIn(userId, userPw)

      alert('로그인 완료')
      
      // 👉 인덱스로 이동
      // navigate('/')
    }
    catch(e) {
      console.log(e);
    }
  }
  
  return (
    <>
      <Login />
    </>
  )
}

export default LoginContainer