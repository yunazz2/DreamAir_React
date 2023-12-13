import React, { useState } from 'react'

const Join = ({onInsert}) => {

  // ⭐ state 설정
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [userPwCheck, setUserPwCheck] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  // handleChange
  const handleChangeUserId = (e) => {
    setUserId(e.target.value)
  }
  const handleChangeUserPw = (e) => {
    setUserPw(e.target.value)
  }
  const handleChangeUserPwCheck = (e) => {
    setUserPwCheck(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
  }

  const onSubmit = () => {
    onInsert(userId, userPw, userPwCheck, name, phone, email, address)
  }

  return (
    <main className="form-signin my-5 w-100 m-auto" style={{ maxWidth: '600px' }}>
      <h1 className="text-center py-3">회원가입</h1>

      <div className="form-join row g-3 mt-4">
        <div className="form-join-label col-12">
          <label htmlFor="userId" className="form-label">아이디</label>
          <div className="input-group has-validation">
            <input type="text" className="form-control" value={userId} onChange={handleChangeUserId} placeholder="아이디" />
            <button className="btn btn-default btn-sm" id="idCheck">ID 중복체크</button>
          </div>
        </div>

        <div className="form-join-label col-12">
          <label htmlFor="userPw" className="form-label">비밀번호</label>
          <div className="input-group has-validation">
            <input type="password" className="form-control" value={userPw} onChange={handleChangeUserPw} placeholder="비밀번호" />
          </div>
        </div>

        <div className="form-join-label col-12">
          <label htmlFor="userPwCheck" className="form-label">비밀번호 확인</label>
          <div className="input-group has-validation">
            <input type="password" className="form-control" value={userPwCheck} onChange={handleChangeUserPwCheck} placeholder="비밀번호 확인" />
          </div>
        </div>

        <div className="form-join-label col-12">
          <label htmlFor="name" className="form-label">이름</label>
          <input type="text" className="form-control" value={name} onChange={handleChangeName} placeholder="이름" />
        </div>

        <div className="form-join-label col-12">
          <label htmlFor="phone" className="form-label">핸드폰 번호</label>
          <input type="text" className="form-control" value={phone} onChange={handleChangePhone} placeholder="핸드폰 번호" />
        </div>

        <div className="form-join-label col-12">
          <label htmlFor="email" className="form-label">이메일</label>
          <input type="email" className="form-control" value={email} onChange={handleChangeEmail} placeholder="email@example.com" />
        </div>

        <div className="form-join-label col-12">
          <label htmlFor="address" className="form-label">주소</label>
          <input type="text" className="form-control" value={address} onChange={handleChangeAddress} placeholder="주소" />
        </div>
      </div>

      <br />

      <button className="w-100 btn btn-primary btn-lg btn-big mt-3" onClick={onSubmit}>회원가입</button>
    </main>
  )
}

export default Join