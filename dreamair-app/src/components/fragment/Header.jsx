import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100 position-absolute start-0 top-0 py-4" style={{ height: '30px' }}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse py-5" id="navbarCollapse" style={{ justifyContent: 'flex-end' }}>

              {/* 비 로그인 시 */}
              <React.Fragment>
                <ul className="navbar-nav navbar-skyblue d-flex justify-content-end w-100 pe-5 me-5" style={{ paddingRight: '245px !important' }}>
                  <li className="nav-item"><Link to="/login" className="nav-link" aria-current="page">로그인</Link></li>
                  <li className="nav-item"><Link to="/join" className="nav-link" aria-current="page">회원가입</Link></li>
                  <li className="nav-item"><Link to="/user/cart" className="nav-link d-flex align-items-center" aria-current="page"><img className="header_image" src="/img/white_cart.png" alt="장바구니"/><span className="ms-2">장바구니 (0)</span></Link></li>
                  <li className="nav-item"><Link to="/admin" className="nav-link" aria-current="page">관리자 페이지</Link></li>
                </ul>
              </React.Fragment>

              {/* 유저 프로필 */}
              {/* 로그인 시 */}
              <React.Fragment>
                <div className="dropdown text-end mx-3">
                  <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                    {/* <strong sec:authentication="principal.users.userId">아이디</strong> */}
                  </Link>
                  <ul className="dropdown-menu text-small">
                    {/* 사용자 메뉴 */}
                    <React.Fragment>
                      <li><Link to="/user" className="dropdown-item">마이 페이지</Link></li>
                      <li><Link to="/user/update" className="dropdown-item">회원 정보 수정</Link></li>
                      <li><Link to="/user/bookingList" className="dropdown-item">나의 탑승권 관리</Link></li>
                      <li><Link to="/user/checkin" className="dropdown-item">체크인</Link></li>
                      <li><Link to="/user/cart" className="dropdown-item">장바구니 조회</Link></li>
                      <li><Link to="/user/mileage" className="dropdown-item">마일리지 조회</Link></li>
                      <li><Link to="/user/delete" className="dropdown-item">회원 탈퇴</Link></li>
                    </React.Fragment>
                    
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <button type="submit" className="dropdown-item">로그아웃</button>
                    </li>
                  </ul>
                </div>
              </React.Fragment>
            </div>
          </div>
        </nav>
      
        <div className="align-items-center text-center mt-5" style={{ lineHeight: '50px', marginTop: '-50px' }}>
          <div className="container d-flex flex-wrap" style={{ width: '100%' }}>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page" ><img src="/img/blackNameLogo.png" alt="로고 이미지" style={{ width: '150px', height: '60px' }} /></Link></li>
            </ul>
            <ul className="navbar navbar-light">
              <li className="nav-item"><Link to="/user/productFlightList" className="nav-link link-body-emphasis px-2">출도착 항공편 조회</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link link-body-emphasis px-2">항공권 예약</Link></li>
              <li className="nav-item"><Link to="/bus" className="nav-link link-body-emphasis px-2">공항 버스 예약</Link></li>
              <li className="nav-item"><Link to="/board/list" className="nav-link link-body-emphasis px-2">게시판</Link></li>
              <li className="nav-item"><Link to="/user" className="nav-link link-body-emphasis px-2">마이 페이지</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header