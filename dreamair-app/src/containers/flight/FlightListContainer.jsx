import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as flights from '../../apis/flight'
import FlightList from '../../components/flight/FlightList'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'
import Header from '../../components/fragment/Header'
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const FlightListContainer = () => {

  const {flightNo } = useParams();
  const [flightList, setFlightList] = useState([]);

  const [currentPost, setCurrentPost] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 3;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPost(flightList.slice(indexOfFirstPost, indexOfLastPost));
  }, [flightList, page]);

  // 게시글 목록 데이터
  const getFlightList = async() => {
    const response = await flights.flight_list();
    const data = await response.data;
    console.log(data);
    setFlightList(data);
  };

  const onDelete = async (flightNo) => {
    const response = await flights.flight_delete(flightNo);
    console.log(response.data);
    alert('flight 삭제 완료')

    // ➡ 게시글 목록 이동
    // navigate('/flight')
    getFlightList();
  }

  useEffect( () => {
    getFlightList();
  }, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <div className="admin_container">
          <FlightList  flightList={currentPost} flightNo={flightNo} onDelete={onDelete}/>
        </div>
    </div>
    <Pagination activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={flightList.length}
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

export default FlightListContainer