import React from 'react'

const Mileage = ({user}) => {


  return (

    <div className="container p-4">
      <h1 className="text-center my-3">마일리지 조회</h1>
    
      <br />
      
      <h3 className="text-center">보유 마일리지 : <span><input type="text" value={user.mileage}/></span></h3>
    </div>
  )
}

export default Mileage