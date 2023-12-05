import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as users from '../apis/index'
import Join from '../components/Join'

// ⛄ 회원 가입
const JoinContainer = () => {

  const navigate = useNavigate()
  
  const onInsert = async (userId, userPw, userPwCheck, name, phone, email, address) => {
    try {
      const response = await users.insert(userId, userPw, userPwCheck, name, phone, email, address)

      alert('회원 가입 완료')
      console.log(response.data)

      // 👉 인덱스로 이동
      navigate('/')
    }
    catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <Join onInsert={onInsert} />
    </>
  )
}

export default JoinContainer