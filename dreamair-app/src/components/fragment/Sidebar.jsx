import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
  sessionStorage.setItem('userId', 'user');
  const userId = sessionStorage.getItem('userId'); // 세션에서 userId를 가져옴

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
                <li className="nav-item"><Link to="/user" className="nav-link d-flex align-items-center gap-2" aria-current="page">마이페이지</Link></li>
                <li className="nav-item"><Link to={`/user/update/${userId}`} className="nav-link d-flex align-items-center gap-2">회원 정보 수정</Link></li>
                <li className="nav-item"><Link to={`/user/checkin/${userId}`} className="nav-link d-flex align-items-center gap-2">체크인</Link></li>
                <li className="nav-item"><Link to={`/user/mileage/${userId}`} className="nav-link d-flex align-items-center gap-2">마일리지 조회</Link></li>
                <li className="nav-item"><Link to={`/user/deleteaccount/${userId}`} className="nav-link d-flex align-items-center gap-2">회원 탈퇴</Link></li>
               
            {/* 회원 / 비회원 모두 조회 가능 메뉴 */}
            <li className="nav-item"><Link to="/user/mybooking" className="nav-link d-flex align-items-center gap-2">나의 탑승권 관리</Link></li>
          </ul>
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar