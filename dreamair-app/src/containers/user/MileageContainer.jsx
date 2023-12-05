import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as users from '../../apis/user'
import Mileage from '../../components/user/Mileage'

// ⛄ 회원 마일리지 조회
const MileageContainer = () => {

  const {userId} = useParams()

  console.log(userId);
  // ⭐ state 설정
  const [user, setUser] = useState({})

  // 로그인 된 유저 ID로 마일리지 조회
  const getUser = async () => {
    const response = await users.selectMileage(userId);
    const data = await response.data;
    console.log(data);
    setUser(data)
  }

  useEffect(() => {
    getUser();
  }, [])
  
  return (
    <>
      <Mileage userId={userId} user={user}/>
    </>
  )
}

export default MileageContainer