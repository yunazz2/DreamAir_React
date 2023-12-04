import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPageContainer = () => {
    const userId = 'user'
    // const userId = getUserId(); // 세션에서 userId를 가져오는 함수 (예: 세션 스토리지, 상태 등)

    return (
        <div className='container p-4'>
            <h1 className="text-center my-3">마이 페이지</h1>
            <div className="btn-box d-grid gap-2">
                <a className="btn btn-outline-primary btn-lg"><Link to={`/user/update/${userId}`}>회원정보 수정</Link></a>
                <a className="btn btn-outline-primary btn-lg"><Link to="/user/checkin">체크인</Link></a>
                <a className="btn btn-outline-primary btn-lg"><Link to={`/user/mileage/${userId}`}>마일리지 조회</Link></a>
                <a className="btn btn-outline-primary btn-lg"><Link to="/user/deleteaccount">회원 탈퇴</Link></a>
                <a className="btn btn-outline-primary btn-lg"><Link to="/user/mybooking">나의 탑승권 관리</Link></a>
                <a className="btn btn-outline-primary btn-lg"><Link to="/user/logout">로그아웃</Link></a>
            </div>
        </div>
    );
};

export default MyPageContainer;
