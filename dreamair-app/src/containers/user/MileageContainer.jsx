import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as userjs from '../../apis/user'
import Mileage from '../../components/user/Mileage'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Sidebar from '../../components/fragment/Sidebar'

// ⛄ 회원 마일리지 조회
const MileageContainer = () => {

  const {userId} = useParams()

  console.log(userId);
  // ⭐ state 설정
  const [user, setUser] = useState({})

  // 로그인 된 유저 ID로 마일리지 조회
  const getUser = async () => {
    const response = await userjs.selectMileage(userId);
    const data = await response.data;
    console.log(data);
    setUser(data)
  }

  useEffect(() => {
    getUser();
  }, [])
  
  return (
    <>
      <Header />
        <div className='d-flex'>
        <Sidebar />
        <Mileage userId={userId} user={user}/>
      </div>
      <Footer />
    </>
  )
}

export default MileageContainer