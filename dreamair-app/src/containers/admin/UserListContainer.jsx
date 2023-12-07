import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import UserList from '../../components/admin/UserList';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const UserListContainer = () => {

  const navigate = useNavigate()

  const [userList, setUserList] = useState([]);

  const [currentPost, setCurrentPost] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 10;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPost(userList.slice(indexOfFirstPost, indexOfLastPost));
  }, [userList, page]);

  // ✔ 게시글 목록 데이터
  const getUserList = async () => {
    const response = await admin.user_list(); 
    const data = await response.data;
    console.log(data);
    setUserList(data);
  };

  const onDelete = async (userNo) => {
    try{
    const response = await admin.user_delete(userNo);
    const data = await response.data;
    alert('삭제 완료');
    console.log(data);
    getUserList();
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
  useEffect(() => {
      getUserList();
  }, [])

  return ( 
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <UserList userList={currentPost} onDelete={onDelete}/> 
    </div>
    <Pagination activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={userList.length}
                pageRangeDisplayed={10}
                prevPageText={'‹'}
                nextPageText={'›'}
                onChange={handlePageChange}
                containerClassName={"pagination-ul"}
                activeClassName={"currentPage"}
                previousClassName={"pageLabel-btn"}
                nextClassName={"pageLabel-btn"}/> 
    <Adminfooter/>  
    </>  
  )

  
}

export default UserListContainer