import React from 'react'
import Login from '../components/index/Login'
import * as users from '../apis/index'
import { useNavigate } from 'react-router-dom'
import Header from '../components/fragment/Header';
import Footer from '../components/fragment/Footer';

// ⛄ 로그인
const LoginContainer = () => {


  
  return (
    <>
    <Header/>
      <div className="container" style={{ minHeight: "380px"}}>
        <Login />
      </div>
    <Footer/>
    </>
  )
}

export default LoginContainer