import React, { useEffect, useState } from 'react'

const UserUpdateForm = ({id, user}) => {

  // ⭐ state 설정
  const [password, setPassword] = useState('')
  const [passwordcheck, setPasswordCheck] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

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
      <h1 className="text-center my-3">회원 정보 수정</h1>

      <hr />
      
      <div className="col-12">
        <label htmlFor="id" className="form-label">아이디</label>
        <input type="text" value={id} className="form-control" />
      </div>

      <div className="col-12">
        <label htmlFor="password" className="form-label">비밀번호</label>
        <input type="password" className="form-control" />
      </div>

      <div className="col-12">
        <label htmlFor="passwordcheck" className="form-label">비밀번호 확인</label>
        <input type="passwordcheck" className="form-control" />
      </div>

      <div className="col-12">
        <label htmlFor="name" className="form-label">이름</label>
        <input type="text" value={name} onChange={handleChangeName} className="form-control" />
      </div>

      <div className="col-12">
        <label htmlFor="phone" className="form-label">핸드폰 번호</label>
        <input type="text" value={phone} className="form-control" />
      </div>

      <div className="col-12">
        <label htmlFor="email" className="form-label">이메일</label>
        <input type="email" value={email} className="form-control" />
      </div>

      <div className="col-12">
        <label htmlFor="address" className="form-label">주소</label>
        <input type="text" value={address} className="form-control" />
      </div>

      <br />

      <div className="btn-box d-grid gap-2">
          <button type="submit" className="btn btn-outline-primary btn-lg">회원정보 수정</button>
      </div>
    </div>
  )
}

export default UserUpdateForm