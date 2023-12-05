import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import UserList from '../../components/admin/UserList';
import { useNavigate } from 'react-router-dom';

const UserListContainer = () => {

  const navigate = useNavigate()

  const [userList, setUserList] = useState([]);

  // ✔ 게시글 목록 데이터
  const getUserList = async () => {
    const response = await admin.user_list(); 
    const data = await response.data;
    console.log(data);
    setUserList(data);
  };

  const onDelete = async (userNo) => {
    const response = await admin.user_delete(userNo);
    const data = await response.data;
    console.log(data);

    navigate('/admin/user_list');
  }
  useEffect(() => {
      getUserList();
  }, [])

  return ( <UserList userList={userList}
                     onDelete={onDelete}
  /> )

  
}

export default UserListContainer