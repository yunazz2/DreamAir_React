import React from 'react'
import { useParams } from 'react-router-dom'
import Mileage from '../../components/user/Mileage'

// ⛄ 회원 마일리지 조회
const MileageContainer = () => {

  const {id} = useParams()


  return (
    <>
      <Mileage/>
    </>
  )
}

export default MileageContainer