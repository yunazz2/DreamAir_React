import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminInsertForm = ({ onInsert }) => {

    const [adminId, setAdminId] = useState('')
    const [adminPw, setAdminPw] = useState('')

    const handleChangeAdminId = (e) => {
        setAdminId(e.target.value)
    }

    const handleChangeAdminPw = (e) => {
        setAdminPw(e.target.value)
    }

    const onSubmit = () => {
        onInsert(adminId, adminPw)
    }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>관리자 정보 등록</h1>

        <div className="row g-3">
          <div className="col-5 ">
            <label htmlFor="adminId" className="form-label">관리자 아이디</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control" name="adminId" id="adminId" placeholder="관리자 아이디" required/>
              <div className="invalid-feedback">Your adminId is required.</div>
            </div>
          </div>

          <div className="col-5">
            <label htmlFor="adminPw" className="form-label">관리자 비밀번호</label>
            <div className="input-group has-validation">
              <input type="password" className="form-control" name="adminPw" id="adminPw" placeholder="관리자 비밀번호" required />
              <div className="invalid-feedback">Your admin password is required.</div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="d-flex justify-content-between">
            <Link to="/admin">목록</Link>
            <button className="btn btn-outline-primary btn-lg" onClick={onSubmit }>관리자 등록</button>
          </div>
        </div>
    </div>
  )
}

export default AdminInsertForm