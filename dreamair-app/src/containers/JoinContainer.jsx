import React from 'react';
import * as Swal from '../apis/alert';
import * as auth from '../apis/auth';
import Footer from '../components/fragment/Footer';
import Header from '../components/fragment/Header';
import Join from '../components/index/Join';
import { useNavigate } from 'react-router-dom'

// ⛄ 회원 가입
const JoinContainer = () => {

  const navigate = useNavigate()

  // 회원 가입 요청
  const join = async (form) => {

    console.log(form);

    let response
    let data

    try {
      response = await auth.join(form)

    } catch (error) {

      console.error(`${error}`);
      console.error(`회원가입 요청 중 에러 발생`);
      return
    }

    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`status : ${status}`);

    if(status === 200) {

      console.log(`회원 가입 성공`);
      Swal.alert("회원 가입 성공", "로그인 페이지로 이동합니다.", "success", () => {navigate("/login")})
      
    } else {
      
      console.log(`회원 가입 실패`);
      Swal.alert("회원 가입 실패", "회원 가입에 실패했습니다.", "error")
    }
  }

  return (
    <>
      <Header/>
      <div className="container">
        <Join join={join} />
      </div>
      <Footer/>
    </>
  )
}

export default JoinContainer