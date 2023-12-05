import React from 'react'

const Join = () => {
  return (
    <main className="form-signin my-5 w-100 m-auto" style={{ maxWidth: '400px' }}>
      <h1 className="text-center py-3">회원가입</h1>

      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="userId" className="form-label">아이디</label>
          <div className="input-group has-validation">
            <input type="text" className="form-control" id="userId" placeholder="아이디" required name="userId" />
            <button className="btn btn-default btn-sm" id="idCheck">ID 중복체크</button>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="userPw" className="form-label">비밀번호</label>
          <div className="input-group has-validation">
            <input type="password" className="form-control" id="userPw" placeholder="비밀번호" required name="userPw" />
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="userPwCheck" className="form-label">비밀번호 확인</label>
          <div className="input-group has-validation">
            <input type="password" className="form-control" id="userPwCheck" placeholder="비밀번호 확인" required name="userPwCheck" />
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="name" className="form-label">이름</label>
          <input type="text" className="form-control" id="name" placeholder="이름" name="name" />
        </div>

        <div className="col-12">
          <label htmlFor="phone" className="form-label">핸드폰 번호</label>
          <input type="text" className="form-control" id="phone" placeholder="핸드폰 번호" name="phone" />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">이메일</label>
          <input type="email" className="form-control" id="email" placeholder="email@example.com" name="email" />
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">주소</label>
          <input type="text" className="form-control" id="address" placeholder="주소" name="address" />
        </div>
      </div>

      <br />

      <button className="w-100 btn btn-primary btn-lg">회원가입</button>
    </main>
  )
}

export default Join