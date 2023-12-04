import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as users from '../../apis/user'
import UserUpdateForm from '../../components/user/UserUpdateForm'


// ⛄ 회원 정보 수정
const UserUpdateContainer = () => {
  
  // const {id} = useParams()

  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const id = 'user'; // 테스트를 위해 아이디를 'user'로 하드코딩

  const onUpdate = async (id, password, name, phone, email, address) => {
    try {
      const response = await users.update(id, password, name, phone, email, address);
      console.log(response.data);
      alert('회원 정보 수정 완료');

      navigate(`/user/${id}`);

    } catch (e) {
      console.log(e);
      alert('회원 정보 수정 실패');
    }
  };

  const getUser = async () => {
    try {
      console.log("1. 아이디? : " + id);
      const response = await users.selectById(id);
      console.log("3. user.js 갔다 오나?");
      const data = response.data
      console.log(data);
      setUser(data);
    }
    catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <>
      <UserUpdateForm id={id} user={user} />
    </>
  )
}

export default UserUpdateContainer