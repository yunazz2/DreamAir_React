import React, { useState } from 'react'

const UserUpdateForm = () => {

  // ⭐ state 설정
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordcheck, setPasswordCheck] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div>
      <h1>회원 정보 수정</h1>

      <hr />
      
      <div>
        <label htmlFor="id">아이디</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="password" />
      </div>

      <div>
        <label htmlFor="passwordcheck">비밀번호 확인</label>
        <input type="passwordcheck" />
      </div>

      <div>
        <label htmlFor="name">이름</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="phone">핸드폰 번호</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input type="email" />
      </div>

      <div>
        <label htmlFor="address">주소</label>
        <input type="text" />
      </div>
    </div>
  )
}

export default UserUpdateForm