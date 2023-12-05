import React from 'react'

const header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100 position-absolute start-0 top-0 py-4" style={{ height: '30px' }}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse py-5" id="navbarCollapse" style={{ justifyContent: 'flex-end' }}>

              {/* 비 로그인 시 */}
              <React.Fragment>
                <ul className="navbar-nav navbar-skyblue d-flex justify-content-end w-100 pe-5 me-5" style={{ paddingRight: '245px !important' }}>
                  <li className="nav-item"><a className="nav-link" aria-current="page" href="/login">로그인</a></li>
                  <li className="nav-item"><a className="nav-link" aria-current="page" href="/join">회원가입</a></li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" aria-current="page" href="/user/cart">
                      <img className="header_image" src="/img/white_cart.png" alt="장바구니" />
                      <span className="ms-2">장바구니 (0)</span>
                    </a>
                  </li>
                  <li className="nav-item"><a className="nav-link" aria-current="page" href="/admin">관리자 페이지</a></li>
                </ul>
              </React.Fragment>

              {/* 유저 프로필 */}
              {/* 로그인 시 */}
              <React.Fragment>
                <div className="dropdown text-end mx-3">
                  <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                    <strong sec:authentication="principal.users.userId">아이디</strong>
                  </a>
                  <ul className="dropdown-menu text-small">
                    {/* 사용자 메뉴 */}
                    <React.Fragment>
                      <li><a className="dropdown-item" href="/user">마이 페이지</a></li>
                      <li><a className="dropdown-item" href="/user/update">회원 정보 수정</a></li>
                      <li><a className="dropdown-item" href="/user/bookingList">나의 탑승권 관리</a></li>
                      <li><a className="dropdown-item" href="/user/checkin">체크인</a></li>
                      <li><a className="dropdown-item" href="/user/cart">장바구니 조회</a></li>
                      <li><a className="dropdown-item" href="/user/mileage">마일리지 조회</a></li>
                      <li><a className="dropdown-item" href="/user/delete">회원 탈퇴</a></li>
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
      </div>
      <header className="border-bottom align-items-center text-center" style={{ lineHeight: '50px', marginTop: '-50px' }}>
        <div className="container d-flex flex-wrap" style={{ width: '100%' }}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><img src="/img/blackNameLogo.png" alt="로고 이미지" style={{ width: '150px', height: '60px' }} /></a>
            </li>
          </ul>
          <ul className="navbar navbar-light">
            <li className="nav-item">
              <a className="nav-link link-body-emphasis px-2" href="/user/productFlightList">출도착 항공편 조회</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis px-2" href="/">항공권 예약</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis px-2" href="/bus">공항 버스 예약</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis px-2" href="/board/list">게시판</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis px-2" href="/user">마이 페이지</a>
            </li>
            {/* 임시 셋팅 */}
            <React.Fragment>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis px-2" href="/admin">관리자 페이지</a>
              </li>
            </React.Fragment>
          </ul>
        </div>
      </header>
    </header>
  );
};

export default header