import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ⛄ 마이페이지
const MyPageContainer = () => {

    sessionStorage.setItem('userId', 'user');   // 세션에 user라고 하드코딩하여 저장
    const userId = sessionStorage.getItem('userId'); // 세션에서 userId를 가져옴
    console.log(userId); // userId 로그 찍어보기

    return (
        <div className='container p-4'>
            <h1 className="text-center my-3">마이 페이지</h1>
            <div className="btn-box d-grid gap-2">
                <Link to={`/user/update/${userId}`} className="btn btn-outline-primary btn-lg">회원정보 수정</Link>
                <Link to={`/user/checkin/${userId}`} className="btn btn-outline-primary btn-lg">체크인</Link>
                <Link to={`/user/mileage/${userId}`} className="btn btn-outline-primary btn-lg">마일리지 조회</Link>
                <Link to={`/user/deleteaccount/${userId}`} className="btn btn-outline-primary btn-lg">회원 탈퇴</Link>
                <Link to={`/user/mybooking/${userId}`} className="btn btn-outline-primary btn-lg">나의 탑승권 관리</Link>
                <Link to="/user/logout" className="btn btn-outline-primary btn-lg">로그아웃</Link>
            </div>
        </div>
    );
};

export default MyPageContainer;
