import React, { useEffect } from 'react'

const sidebar = () => {
  // useEffect(() => {
  //   // URL : http://localhost:8080/user/update
  //   // window.location.pathname : /user/update
  //   $('[href="' + window.location.pathname + '"]').addClass('active');
  // }, []);

  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">DreamAir</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto w-100">
          <ul className="nav nav-pills flex-column">
            {/* 회원 메뉴 */}
            {/* {isAuthenticated && ( */}
              <>
                <li className="nav-item">
                  <a href="/user" className="nav-link d-flex align-items-center gap-2" aria-current="page">
                    마이페이지
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/user/update" className="nav-link d-flex align-items-center gap-2">
                    회원 정보 수정
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/user/checkin" className="nav-link d-flex align-items-center gap-2">
                    체크인
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/user/mileage" className="nav-link d-flex align-items-center gap-2">
                    마일리지 조회
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/user/delete" className="nav-link d-flex align-items-center gap-2">
                    회원 탈퇴
                  </a>
                </li>
              </>
            {/* )} */}

            {/* 회원 / 비회원 모두 조회 가능 메뉴 */}
            <li className="nav-item">
              <a href="/user/cart" className="nav-link d-flex align-items-center gap-2">
                장바구니 조회
              </a>
            </li>
            <li className="nav-item">
              <a href="/user/bookingList" className="nav-link d-flex align-items-center gap-2">
                나의 탑승권 관리
              </a>
            </li>
          </ul>
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
};

export default sidebar