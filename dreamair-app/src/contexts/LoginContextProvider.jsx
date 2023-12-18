import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../apis/api';
import * as auth from '../apis/auth';
import Cookies from 'js-cookie';
import * as Swal from '../apis/alert';

export const LoginContext = createContext();
LoginContext.displayName = 'LoginContextName';  // 출력하고 싶은 이름..?

/**
    로그인
    ✅ 로그인 체크
    ✅ 로그인 요청
    ✅ 로그아웃 요청

    ✨ 로그인 세팅
    ✨ 로그아웃 세팅
 */
const LoginContextProvider = ({children}) => {    // 이 안에서 LoginContextProvider를 정의

    /**
        상태
        - 로그인 여부
        - 유저 정보
        - 권한 정보
        - 아이디 저장
     */

    // 로그인 여부
    const [isLogin, setLogin] = useState(false);
    
    // 유저 정보
    const [userInfo, setUserInfo] = useState({})

    // 권한 정보
    const [roles, setRoles] = useState({isUser : false, isAdmin : false})

    // 아이디 저장
    const [rememberUserid, setRememberUserId] = useState()

    // ----------------------------------------------------------------------
    
    // 페이지 이동
    const navigate = useNavigate();
    
    // ----------------------------------------------------------------------
    
    // ⭐ 로그인 체크
    //      - 쿠키에 jwt가 있는지 확인
    //      - 서버측에 jwt로 사용자 정보를 요청
    const loginCheck = async () => {
        
        // 쿠키에서 jwt 토큰 가져오기
        const accessToken = Cookies.get("accessToken")
        console.log(`accessToken : ${accessToken}`);
        
        
        // accessToken(jwt)이 없는 경우 - 로그아웃 세팅을 진행하여 더 이상 로그인할 수 없도록 리턴
        if(!accessToken) {
            console.log(`쿠키에 accessToken(jwt)이 없음`);
            logoutSetting()
            return
        }
        
        // accessToken(jwt)이 있는 경우 - header에 jwt 토큰 담기
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        
        // 사용자 정보 요청
        let response
        let data
        
        try {
            response = await auth.info()
        } catch (error) {
            console.log(`error : ${error}`);
            console.log(`status : ${response.status}`);
            return;
        }
        
        data = response.data
        console.log(`data : ${data}`);

        // ❌ 인증 실패
        if(data == 'UNAUTHORIZED' || response.status == 401) {  // 401 : 권한 없을 시
            console.error(`accessToken(jwt)이 만료되었거나 인증에 실패하였습니다.`);
        }
        
        // ✅ 인증 성공
        console.log(`accessToken(jwt) 토큰으로 사용자 인증 정보 요청 성공!`);
        
        // 로그인 세팅
        loginSetting(data, accessToken)
    }

    // ----------------------------------------------------------------------
    
    // ⭐ 로그인
    const login = async (username, password) => {
        console.log(`username : ${username}`);
        console.log(`password : ${password}`);

        try {
            const response = await auth.login(username, password)
            const data = response.data
            const status = response.status
            const headers = response.headers
            const authorization = headers.authorization
            const accessToken = authorization.replace("Bearer ", "") // JWT
    
            console.log(`data : ${data}`);
            console.log(`statue : ${status}`);
            console.log(`headers : ${headers}`);
            console.log(`jwt : ${accessToken}`);
            
            // ✅ 로그인 성공
            if(status === 200) {
                
                // 쿠키에 acessToken(jwt) 저장
                Cookies.set("accessToken", accessToken)
                
                // 로그인 체크 (/users/{userId} <-- userData)
                loginCheck()

                // title, content, icon, callback
                Swal.alert(`로그인 성공`, `메인 화면으로 갑니다.`, "success", () => {navigate("/")})
            }
        } catch (error) {
            // 로그인 실패
            // 아이디 또는 비밀번호가 일치하지 않습니다.
            Swal.alert(`로그인 실패`, `아이디 또는 비밀번호가 일치하지 않습니다.`, "error")
        }
    }
    
    // ----------------------------------------------------------------------

    // 로그아웃 처리
    const logout = () => {
        
        Swal.confirm("로그아웃 하시겠습니까?", "로그아웃 진행", "warning",
            (result) => {
                if(result.isConfirmed) {
                    // 로그아웃 세팅
                    logoutSetting()
            
                    // 메인 페이지로 이동
                    navigate("/")
                }
            }
        )
    }

    // ----------------------------------------------------------------------
    
    // ✨ 로그인 세팅
    // ⛄ userData, accessToken(jwt)
    const loginSetting = (userData, accessToken) => {
        const {no, userId, authList} = userData
        const roleList = authList.map((auth) => auth.auth)
        
        console.log(`no : ${no}`);
        console.log(`userId : ${userId}`);
        console.log(`authList : ${authList}`);
        console.log(`roleList : ${roleList}`);
        
        // axios 객체의 header(Authorization : `Bearer ${accessToken}`)
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        
        // 로그인 여부 : true
        setLogin(true)
        
        // 유저 정보 세팅
        const updateUserInfo = {no, userId, roleList}
        setUserInfo(updateUserInfo)
        
        // 권한 정보 세팅
        const updatedRoles = {isUser : false, isAdmin : false}
        
        roleList.forEach((role) => {
            if(role == 'ROLE_USER') updatedRoles.isUser = true
            if(role == 'ROLE_ADMIN') updatedRoles.isAdmin = true
        })
        setRoles(updatedRoles)
    }

    // ----------------------------------------------------------------------
    
    // 로그아웃 세팅
    const logoutSetting = () => {
        // axios 헤더 초기화
        api.defaults.headers.common.Authorization = undefined;
        
        // 쿠키 초기화
        Cookies.remove("accessToken")

        // 로그인 여부 : false
        setLogin(false)
        
        // 유저 정보 초기화
        setUserInfo(null)
        
        // 권한 정보 초기화
        setRoles(null)
    }
    
    // ----------------------------------------------------------------------
    
    useEffect(() => {

        // mount가 될 때 호출
        loginCheck() // 이게 없으면 로그인을 했는데도 새로 고침할 시, 로그아웃이 됨

    }, [])

    return (
        <LoginContext.Provider value={{isLogin, userInfo, roles, login, loginCheck, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider