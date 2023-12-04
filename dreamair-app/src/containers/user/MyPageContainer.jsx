import React, { useState } from 'react';

const MyPageContainer = () => {

    return (
        <>
            <div className="mypage_menu">
                <a href="/user/update">회원정보 수정</a>
                <a href="/user/checkin">체크인</a>
                <a href="/user/mileage">마일리지 조회</a>
                <a href="/user/deleteaccount">회원 탈퇴</a>
                <a href="/user/mybooking">나의 탑승권 관리</a>
                <a href="/user/logout">로그아웃</a>
            </div>
        </>
    );
};

export default MyPageContainer;