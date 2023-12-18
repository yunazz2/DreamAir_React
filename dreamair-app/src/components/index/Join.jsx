import React, { useState } from 'react'

const Join = ({join}) => {

  const onJoin = (e) => { // e : 이벤트 객체
    e.preventDefault()  // 아래 폼 태그에서 join 버튼 클릭 시, submit 기본 동작 막아주기
    const form = e.target
    const userId = form.username.value
    const userPw = form.password.value
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const address = form.address.value

    console.log(userId, userPw, name, email, phone, address);

    join({userId, userPw, name, email, phone, address})

}

  return (
    <main className="form-signin my-5 w-100 m-auto" style={{ maxWidth: '600px' }}>
      <h1 className="text-center py-3">회원가입</h1>

      <form className='login-form' onSubmit={(e) => onJoin(e) }>
        <div className="form-join row g-3 mt-4">
          <div className="form-join-label col-12">
            <label htmlFor="userId" className="form-label">아이디</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control" name='username' autoComplete='username' placeholder="아이디" required />
              <button className="btn btn-default btn-sm" id="idCheck">ID 중복체크</button>
            </div>
          </div>

          <div className="form-join-label col-12">
            <label htmlFor="userPw" className="form-label">비밀번호</label>
            <div className="input-group has-validation">
              <input type="password" className="form-control" name='password' autoComplete='password' placeholder="비밀번호" required />
            </div>
          </div>

          <div className="form-join-label col-12">
            <label htmlFor="userPwCheck" className="form-label">비밀번호 확인</label>
            <div className="input-group has-validation">
              <input type="password" className="form-control" name='passwordCheck' autoComplete='passwordCheck' placeholder="비밀번호 확인" />
            </div>
          </div>

          <div className="form-join-label col-12">
            <label htmlFor="name" className="form-label">이름</label>
            <input type="text" className="form-control" name='name' autoComplete='name' placeholder="이름" required />
          </div>

          <div className="form-join-label col-12">
            <label htmlFor="email" className="form-label">이메일</label>
            <input type="email" className="form-control" name='email' autoComplete='email' placeholder="email@example.com" required />
          </div>

          <div className="form-join-label col-12">
            <label htmlFor="phone" className="form-label">핸드폰 번호</label>
            <input type="text" className="form-control" name='phone' autoComplete='phone' placeholder="핸드폰 번호" required />
          </div>

          <div className="form-join-label col-12">
            <label htmlFor="address" className="form-label">주소</label>
            <input type="text" className="form-control" name='address' autoComplete='address' placeholder="주소" required />
          </div>
        </div>

        <br />

        <button type='submit' className="w-100 btn btn-primary btn-lg btn-big mt-3" >회원가입</button>
      </form>
    </main>
  )
}

export default Join