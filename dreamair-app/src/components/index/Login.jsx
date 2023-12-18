import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as users from '../../apis/index'
import { LoginContext } from '../../contexts/LoginContextProvider'

const Login = () => {

  const {login} = useContext(LoginContext)

  const onLogin = (e) => {
      e.preventDefault()

      const form = e.target
      const username = form.username.value
      const password = form.password.value

      sessionStorage.setItem('userId', username);

      login(username, password)
  }

  return (
    <main className="form-signin my-5 w-100 m-auto" style={{ maxWidth: '360px' }}>
      <h1 className="h3 mb-3 fw-normal text-center">로그인</h1>

      <form className='login-form' onSubmit={(e) => onLogin(e) }>
        <div className="form-floating">
          <input type="text" className="form-control" name="username" id="username" autoComplete='username' placeholder="아이디" autoFocus required />
          <label htmlFor="username">아이디</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" name="password" id="password" placeholder="비밀번호" autoComplete='password' required />
          <label htmlFor="password">비밀번호</label>
        </div>

        <div className="d-flex justify-content-around">
          <div className="form-check text-start my-3">
            {/* 아이디 저장 ✅ */}
            <label className="form-check-label" htmlFor="remember-id">아이디 저장
              <input className="form-check-input login_checkbox" type="checkbox" name="remember-id" id="remember-id" />
            </label>
          </div>
          <div className="form-check text-start my-3">
            <label className="form-check-label" htmlFor="remember-me">자동 로그인
              <input className="form-check-input login_checkbox" type="checkbox" name="remember-me" id="remember-me" />
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2" >로그인</button>
      </form>
    </main>
  )
}

export default Login