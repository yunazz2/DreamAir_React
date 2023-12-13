import React, { useEffect, useState } from 'react'

const UserUpdateForm = ({userId, user, onUpdate}) => {

  // ⭐ state 설정
  const [userPw, setUserPw] = useState('')
  const [userPwCheck, setUserPwCheck] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  // submit하면서 변경할 값
  const handelChangePassword = (e) => {
    setUserPw(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const handelChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
  }

  const onSubmit = () => {
    onUpdate(userId, userPw, name, phone, email, address)
    console.log(userId);
  }

  // 회원의 기존 정보 세팅
  useEffect(() => {
    if(user) {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
      setAddress(user.address);
    }
  }, [user])

  return (
    <div className='container p-4'>
      <h1 className="text-center my-3 mt-3">회원 정보 수정</h1>
      
      <div className="updateForm">
      <div className="updateForm-label col-12">
        <label htmlFor="userId" className="form-label">아이디</label>
        <input type="text" value={userId} className="form-control" readOnly/>
      </div>

      <div className="updateForm-label col-12">
        <label htmlFor="userPw" className="form-label">비밀번호</label>
        <input type="password" onChange={handelChangePassword} className="form-control" />
      </div>

      <div className="updateForm-label col-12">
        <label htmlFor="userPwCheck" className="form-label">비밀번호 확인</label>
        <input type="password" className="form-control" />
      </div>

      <div className="updateForm-label col-12">
        <label htmlFor="name" className="form-label">이름</label>
        <input type="text" value={name} onChange={handleChangeName} className="form-control" />
      </div>

      <div className="updateForm-label col-12">
        <label htmlFor="phone" className="form-label">핸드폰 번호</label>
        <input type="text" value={phone} onChange={handleChangePhone} className="form-control" />
      </div>

      <div className="updateForm-label col-12">
        <label htmlFor="email" className="form-label">이메일</label>
        <input type="email" value={email} onChange={handelChangeEmail} className="form-control" />
      </div>

      <div className="updateForm-label col-12">
        <label htmlFor="address" className="form-label">주소</label>
        <input type="text" value={address} onChange={handleChangeAddress} className="form-control" />
      </div>

      <br />

      <div className="btn-box d-grid gap-2 mt-3">
          <button type="submit" onClick={onSubmit} className="btn btn-outline-primary btn-lg btn-big">회원정보 수정</button>
      </div>
      </div>
    </div>
  )
}

export default UserUpdateForm