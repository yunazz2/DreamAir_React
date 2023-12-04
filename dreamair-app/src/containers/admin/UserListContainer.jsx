import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import UserList from '../../components/admin/UserList';

const UserListContainer = () => {

  const [userList, setUserList] = useState([]);

  // ✔ 게시글 목록 데이터
  const getUserList = async () => {
    const response = await admin.user_list(); 
    const data = await response.data;
    console.log(data);
    setUserList(data);
  };

  useEffect(() => {
      getUserList();
  }, [])

  return ( <UserList userList={userList}></UserList> )

  
}

export default UserListContainer