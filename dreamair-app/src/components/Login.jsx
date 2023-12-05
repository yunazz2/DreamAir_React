import React from 'react'

const Login = () => {
  return (
    <main className="form-signin my-5 w-100 m-auto" style={{ maxWidth: '360px' }}>
      <h1 className="h3 mb-3 fw-normal text-center">로그인</h1>

      <div className="form-floating">
        <input type="text" className="form-control" name="id" id="floatingInput" placeholder="아이디" autoFocus />
        <label htmlFor="floatingInput">아이디</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" name="pw" id="floatingPassword" placeholder="비밀번호" />
        <label htmlFor="floatingPassword">비밀번호</label>
      </div>

      <div className="d-flex justify-content-around">
        <div className="form-check text-start my-3">
          {/* 아이디 저장 ✅ */}
          <label className="form-check-label" htmlFor="remember-id">아이디 저장
            <input className="form-check-input" type="checkbox" name="remember-id" id="remember-id" />
          </label>
        </div>
        <div className="form-check text-start my-3">
          <label className="form-check-label" htmlFor="remember-me">자동 로그인
            <input className="form-check-input" type="checkbox" name="remember-me" id="remember-me" />
          </label>
        </div>
      </div>
      <button className="btn btn-primary w-100 py-2">로그인</button>
    </main>
  )
}

export default Login