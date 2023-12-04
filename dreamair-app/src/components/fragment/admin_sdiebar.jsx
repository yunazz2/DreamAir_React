import React from 'react'

const admin_sdiebar = () => {
  return (

 <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">DreamAir</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto w-100">

          <ul className="nav nav-pills flex-column">

            {/* 관리자 메뉴 */}
            <li>
              <a href="/admin/" className="nav-link d-flex align-items-center gap-2" aria-current="page">대시보드</a>
            </li>

            <li>
              <a href="/admin/admin_insert" className="nav-link d-flex align-items-center gap-2">관리자 등록</a>
              <ul>
                <li><a href="/admin/admin_list" className="nav-link d-flex align-items-center gap-2">관리자 목록</a></li>
              </ul>
            </li>

            <li>
              <a href="/admin/user_list" className="nav-link d-flex align-items-center gap-2">사용자 관리</a>
            </li>

            <li>
              <a href="/product/flight_list" className="nav-link d-flex align-items-center gap-2">항공기 관리</a>
              <ul>
                <li><a href="/product/flight_insert" className="nav-link d-flex align-items-center gap-2">항공기 정보 등록</a></li>
              </ul>
            </li>

            <li>
              <a href="/product/product_list" className="nav-link d-flex align-items-center gap-2">상품 관리</a>
              <ul>
                <li><a href="/product/product_insert" className="nav-link d-flex align-items-center gap-2">상품 정보 등록</a></li>
              </ul>
            </li>

            <li>
              <a href="/admin/booking_list" className="nav-link d-flex align-items-center gap-2">예매 관리</a>
            </li>

            <li>
              <a href="/admin/ticket_list" className="nav-link d-flex align-items-center gap-2">사용자 탑승권 관리</a>
            </li>
          </ul>
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
};


export default admin_sdiebar