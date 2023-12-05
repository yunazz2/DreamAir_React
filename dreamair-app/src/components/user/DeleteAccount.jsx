import React from 'react'

const DeleteAccount = ({userId, onDelete}) => {
  return (
    <div className="container p-4">
        <h1 className="text-center my-3">회원 탈퇴</h1>
    
        <br />

        <p className="text-center">회원 탈퇴를 진행하시겠습니까?</p>
        <p className="text-center">탈퇴 시 회원 정보 및 마일리지 복구가 불가능합니다.</p>

        <br />

        <div className="btn-box d-grid gap-2 d-flex justify-content-center">
            <button className="btn btn-outline-danger" onClick={() => onDelete(userId)}>회원 탈퇴</button>
        </div>
    </div>
  )
}

export default DeleteAccount