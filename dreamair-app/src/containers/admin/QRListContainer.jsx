import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as qr from '../../apis/qr'
import QRList from '../../components/admin/QRList'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const QRListContainer = () => {

    const {qrNo} = useParams();
    const [qrList, setQRList] = useState([]);

    const [currentPost, setCurrentPost] = useState([]);
    const [page, setPage] = useState(1);
    const postPerPage = 10;
  
    const handlePageChange = (page) => {
      setPage(page);
    };
  
    useEffect(() => {
      const indexOfLastPost = page * postPerPage;
      const indexOfFirstPost = indexOfLastPost - postPerPage;
      setCurrentPost(qrList.slice(indexOfFirstPost, indexOfLastPost));
    }, [qrList, page]);

    const getQRList = async () => {
        const response = await qr.list();
        const data = await response.data;
        console.log(data);
        setQRList(data);
    }
    
    useEffect(() => {
        getQRList();
    }, [])

    const onDelete = async (qrNo) => {
        try {
          const response = await qr.remove(qrNo);
          console.log(response.data);
          alert('삭제 완료');
          getQRList();
        } catch (error) {
          console.error('Error deleting admin:', error);
        }
      };

    return (
        <>
        <Header/>
        <div className='d-flex'>
            <Adminsidebar/>
            <QRList qrList = {currentPost} qrNo = {qrNo}/>
        </div>
        <Pagination activePage={page}
                      itemsCountPerPage={postPerPage}
                      totalItemsCount={qrList.length}
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

export default QRListContainer