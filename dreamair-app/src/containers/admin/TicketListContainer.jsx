import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as admin from '../../apis/admin';
import TicketList from '../../components/admin/TicketList';
import TicketSearch from '../../components/admin/TicketSearch';
import Adminfooter from '../../components/fragment/Adminfooter';
import Adminsidebar from '../../components/fragment/Adminsidebar';
import Header from '../../components/fragment/Header';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const TicketListContainer = () => {

  const {ticketNo} = useParams();
  const [isLoading, setLoading] = useState(true)

  const [ticketList, setTicketList] = useState([]);

  const [currentPost, setCurrentPost] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 10;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPost(ticketList.slice(indexOfFirstPost, indexOfLastPost));
  }, [ticketList, page]);

  const getTicketList = async () => {
    const response = await admin.ticket_list(); 
    const data = await response.data;
    console.log(data);
    setTicketList(data);

    // navigate('/admin/ticket_list')
  };

  const onSearch = async (flightNo, selected) => {
    setLoading(true)
    const response = await admin.ticket_selectList(flightNo, selected);
    const data = await response.data;
    console.log('★★★★★★★★★★ TicketListContainer');
    console.log('flight No : ' + flightNo);
    console.log('selected : ' + selected);
    console.log(data);            // 데이터 OK ✅

    setTicketList(data);          // ✅ 
    setLoading(false)
  }

  useEffect(() => {
      setLoading(true)
      getTicketList();
      setLoading(false)
  }, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <div className="container">
          <h1 className="text-center my-5">탑승권 관리</h1>
          <TicketSearch ticketList={currentPost} onSearch={onSearch} ticketNo={ticketNo}/>
          <TicketList isLoading = {isLoading} ticketList = {ticketList} ticketNo={ticketNo}/>
        </div>
    </div>
          <Pagination activePage={page}
                      itemsCountPerPage={postPerPage}
                      totalItemsCount={ticketList.length}
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

export default TicketListContainer