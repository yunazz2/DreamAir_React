import React from 'react'
import { Link } from 'react-router-dom';

const Adminsidebar = () => {
  return (

 <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">DreamAir</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>

        {/* 관리자 메뉴 */}
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto w-100">
          <ul className="nav nav-pills flex-column">
              <li><span>관리자 관리</span>
                <ul className='Admin_submenu'>
                  <li><Link to="/admin" className="nav-link d-flex align-items-center gap-2" aria-current="page">관리자 목록</Link></li>
                  <li><Link to="/admin/admin_insert" className="nav-link d-flex align-items-center gap-2">전체 관리자 정보 등록</Link></li>
                </ul>
              </li>

              <li><span>사용자 관리</span>
                <ul className='Admin_submenu'>
                  <li><Link to="/admin/user_list" className="nav-link d-flex align-items-center gap-2">전체 사용자 목록</Link></li>
                  {/* <li><Link to="/admin/user_insert" className="nav-link d-flex align-items-center gap-2">사용자 정보 등록</Link></li> */}
                  <li><Link to="#" className="nav-link d-flex align-items-center gap-2">사용자 정보 등록</Link></li>
                </ul>
              </li>

              <li><span>항공기 관리</span>
                <ul className='Admin_submenu'>
                  <li><Link to="/flight" className="nav-link d-flex align-items-center gap-2">전체 항공기 목록</Link></li>
                  <li><Link to="/flight/flight_insert" className="nav-link d-flex align-items-center gap-2">항공기 정보 등록</Link></li>
                </ul>
              </li>

              <li><span>상품 관리</span>
                <ul className='Admin_submenu'>
                  <li><Link to="/product" className="nav-link d-flex align-items-center gap-2">전체 상품 목록</Link></li>
                  <li><Link to="/product/product_insert" className="nav-link d-flex align-items-center gap-2">상품 정보 등록</Link></li>
                </ul>
              </li>

              <li><span>예매 관리</span>
                <ul className='Admin_submenu'>
                  <li><Link to="/admin/booking_list" className="nav-link d-flex align-items-center gap-2">전체 예매 목록</Link></li>
                </ul>
              </li>

              <li><span>탑승권 관리</span>
                <ul className='Admin_submenu'>
                  <li><Link to="/admin/ticket_list" className="nav-link d-flex align-items-center gap-2">사용자 탑승권 관리</Link></li>
                </ul>
              </li>
            </ul>
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
};


export default Adminsidebar