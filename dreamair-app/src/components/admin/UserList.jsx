import React from 'react'
import { Link } from 'react-router-dom'

const UserList = ({userList, userNo, onDelete}) => {
  const handleDelete = () => {
    onDelete(userNo)
  }
  return (
    <div className='container'>
      <h1 className="text-center my-5">사용자 관리</h1>

      <div className="btn-box d-grid gap-2 ">
          <button className='btn btn-outline-primary btn-lg'><Link to="/admin/user_insert">사용자 정보 수동 등록</Link></button>
      </div>
      <br />

        {userList != null && (
          <table className="table table-striped table-hover table-bordered text-center align-middle">
            <thead>
              <tr className="table-primary">
                <th>회원번호</th>
                <th>아이디</th>
                <th>이름</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>등록일자</th>
                <th>수정일자</th>
                <th colSpan="2">비고</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.userNo}>
                  <td>{user.userNo}</td>
                  <td>{user.userId}</td>
                  <td>{user.Name}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.regDate}</td>
                  <td>{user.updDate}</td>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <td colSpan="2" align='right'><button className='btn btn-danger' onClick={ () => handleDelete(userNo) }>삭제</button></td>
                  </div>
             </tr>
              ))}
            </tbody>
          </table>
        )}

        {userList == null && (
          <tr>
            <td colSpan="12">등록된 사용자 정보가 없습니다.</td>
          </tr>
        )}
  </div>
);
};


export default UserList