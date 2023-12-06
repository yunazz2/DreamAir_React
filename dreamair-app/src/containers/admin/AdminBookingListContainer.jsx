import React, { useEffect, useState } from 'react'
import * as admin from '../../apis/admin'
import AdminBookingList from '../../components/admin/AdminBookingList'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const AdminBookingListContainer = () => {

  const [AdminbookingList, setAdminBookingList] = useState([]);

  const [currentPost, setCurrentPost] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 10;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPost(AdminbookingList.slice(indexOfFirstPost, indexOfLastPost));
  }, [AdminbookingList, page]);

  const getAdminBookingList = async () => {
    const response = await admin.booking_list(); 
    const data = await response.data;
    console.log(data);
    setAdminBookingList(data);
  };

  useEffect(() => {
    getAdminBookingList();
}, [])


return (
<>
    <Header/>
    <div className='d-flex'>
      <Adminsidebar/>
      <AdminBookingList AdminbookingList = {currentPost}/>
    </div>
    <Pagination activePage={page}
                      itemsCountPerPage={postPerPage}
                      totalItemsCount={AdminbookingList.length}
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

export default AdminBookingListContainer