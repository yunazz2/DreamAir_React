import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContextProvider';

const Header = () => {

  const {isLogin, login, logout} = useContext(LoginContext);

  return (
    <header>
      <div className="header_container">
        <div className="container" style={{height: "100px"}}>
            {!isLogin
             ?
            //  비 로그인 시
            <div className="sub_nav">
             <li className="nav-item"><Link to="/login" aria-current="page">로그인</Link></li>
             <li className="nav-item"><Link to="/join"  aria-current="page">회원가입</Link></li>
             <li className="nav-item"><Link to="/admin" aria-current="page">관리자 페이지</Link></li>
            </div>
             :
            //  로그인 시
             <div className="sub_nav">
              <li className="nav-item"><Link to="/user" aria-current="page">마이 페이지</Link></li>
              <li className="nav-item"><Link to="/admin"  aria-current="page">관리자 페이지</Link></li>
              <li><button className='link' onClick={() => logout()}>로그아웃</button></li>
             </div>
            }

          <div className="main_nav">
            <div className="logo">
              <li className="mainlogo"><Link to="/"><img src="/img/blackNameLogo.png" alt="로고 이미지" /></Link></li>
            </div>
            <div className="nav_menu">
              <li className="navitem"><Link to="/user/productFlightList">출도착 조회</Link></li>
              <li className="navitem"><Link to="/">항공권 예약</Link></li>
              <li className="navitem"><Link to="/bus">공항 버스 예약</Link></li>
              <li className="navitem"><Link to="/board">게시판</Link></li>
              <li className="navitem"><Link to="/user">마이 페이지</Link></li>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </header>
  )
}


export default Header