import React, { useState } from 'react';

const MyPageContainer = () => {

    return (
        <>
            <div className="mypage_menu">
                <p><a href="/user/update/user">회원정보 수정</a></p>
                <p><a href="/user/checkin">체크인</a></p>
                <p><a href="/user/mileage">마일리지 조회</a></p>
                <p><a href="/user/deleteaccount">회원 탈퇴</a></p>
                <p><a href="/user/mybooking">나의 탑승권 관리</a></p>
                <p><a href="/user/logout">로그아웃</a></p>
            </div>
        </>
    );
};

export default MyPageContainer;