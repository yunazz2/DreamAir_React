import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as users from '../../apis/user'
import UserUpdateForm from '../../components/user/UserUpdateForm'


// ⛄ 회원 정보 수정
const UserUpdateContainer = () => {
  
  const {userId} = useParams()

  // ⭐ state 설정
  const [user, setUser] = useState({})
  
  // 로그인 된 유저 정보 조회
  const getUser = async () => {
    const response = await users.selectById(userId);
    const data = await response.data;
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, [])

  const navigate = useNavigate()

  const onUpdate = async (userId, userPw, name, phone, email, address) => {
    try {
      const response = await users.update(userId, userPw, name, phone, email, address);
      console.log(response.data);
      alert('회원 정보 수정 완료');

      navigate('/user');

    } catch (e) {
      console.log(e);
      alert('회원 정보 수정 실패');
    }
  };

  return (
    <>
      <UserUpdateForm userId={userId} user={user} onUpdate={onUpdate} />
    </>
  )
}

export default UserUpdateContainer