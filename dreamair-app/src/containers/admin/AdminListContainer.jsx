import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as admin from '../../apis/admin';
import AdminList from '../../components/admin/AdminList';
import Header from '../../components/fragment/Header';
import Adminfooter from '../../components/fragment/Adminfooter';
import Adminsidebar from '../../components/fragment/Adminsidebar';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'
import { LoginContext } from '../../contexts/LoginContextProvider';
import * as Swal from '../../apis/alert';

const AdminListContainer = () => {

  const {isLogin, userInfo, roles} = useContext(LoginContext);
  const navigate = useNavigate();

  const {adminNo} = useParams();
  const [adminList, setAdminList] = useState([]);
  
  const [currentPost, setCurrentPost] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 10; // 페이지 당 게시글 개수

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPost(adminList.slice(indexOfFirstPost, indexOfLastPost));
  }, [adminList, page]);

  const getAdminList = async () => {
    try {
      const response = await admin.admin_list();
      const data = response.data;
      setAdminList(data);
    } catch (error) {
      console.error('Error fetching admin list:', error);
    }
  };

  const onDelete = async (adminNo) => {
    try {
      const response = await admin.admin_delete(adminNo);
      console.log(response.data);
      alert('삭제 완료');
      getAdminList();
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  useEffect(() => {
    
    if(!isLogin || !userInfo) {
      Swal.alert("로그인이 필요합니다.", "로그인 페이지로 이동합니다.", "error", () => {navigate("/login")})
      return
    }
    if(!roles.isAdmin) {
      Swal.alert("관리자 권한이 없습니다.", "메인 페이지로 이동합니다.", "error", () => {navigate("/")})
      return
    }

    getAdminList();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex">
        <Adminsidebar />
        <div className="admin_container">
          <AdminList adminList={currentPost} adminNo={adminNo} onDelete={onDelete} />
        </div>
      </div>
        <Pagination
          activePage={page}
          itemsCountPerPage={postPerPage}
          totalItemsCount={adminList.length}
          pageRangeDisplayed={10}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
          containerClassName={"pagination-ul"}
          activeClassName={"currentPage"}
          previousClassName={"pageLabel-btn"}
          nextClassName={"pageLabel-btn"}
        />
      <Adminfooter />
    </>
  );
};

export default AdminListContainer;