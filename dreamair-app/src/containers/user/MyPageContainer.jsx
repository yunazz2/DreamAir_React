import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'
import { LoginContext } from '../../contexts/LoginContextProvider';


// ⛄ 마이페이지
const MyPageContainer = () => {

    const {isLogin, login, logout} = useContext(LoginContext);
    const userId = sessionStorage.getItem('userId'); // 세션에서 userId를 가져옴

    return (
        <>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                <div className='container p-4'>
                    <h1 className="text-center my-3">마이 페이지</h1>
                        {isLogin
                         ?
                        //  로그인 시
                        <div className="btn-box d-grid gap-2">
                            <Link to={`/user/update/${userId}`} className="btn btn-outline-primary btn-lg btn-big">회원 정보 수정</Link>
                            <Link to={`/user/checkin/${userId}`} className="btn btn-outline-primary btn-lg btn-big">체크인</Link>
                            <Link to={`/user/mileage/${userId}`} className="btn btn-outline-primary btn-lg btn-big">마일리지 조회</Link>
                            <Link to={`/user/deleteaccount/${userId}`} className="btn btn-outline-primary btn-lg btn-big">회원 탈퇴</Link>
                            <Link to={`/user/mybooking/${userId}`} className="btn btn-outline-primary btn-lg btn-big">나의 탑승권 관리</Link>
                        </div>
                        :
                        <div className="btn-box d-grid gap-2">
                            <Link to={`/user/mybooking/${userId}`} className="btn btn-outline-primary btn-lg btn-big">나의 탑승권 관리</Link>
                        </div>
                        }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyPageContainer;
