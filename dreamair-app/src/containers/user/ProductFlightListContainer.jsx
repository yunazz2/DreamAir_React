import React, { useEffect, useState } from 'react';
import * as users from '../../apis/user';
import ProductFlightList from '../../components/user/ProductFlightList';
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'

import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const ProductFlightListContainer = () => {
    const [productFlightList, setProductFlightList] = useState([]);
  
    const [currentPost, setCurrentPost] = useState([]);
    const [page, setPage] = useState(1);
    const postPerPage = 10; // 페이지 당 게시글 개수

    const handlePageChange = (page) => {
        setPage(page);
    };

    useEffect(() => {
        const indexOfLastPost = page * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        setCurrentPost(productFlightList.slice(indexOfFirstPost, indexOfLastPost));
    }, [productFlightList, page]);

    const getProductFlightList = async () => {
        try {
          const response = await users.productFlightList();
          const data = response.data;
          setProductFlightList(data);
        } catch (error) {
          console.error('Error fetching admin list:', error);
        }
      };

    useEffect(() => {
        getProductFlightList();
      }, []);

    return (
    <>
    <Header/>
    <div className="container">
    <ProductFlightList productFlightList={currentPost}/>
    <Pagination activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={productFlightList.length}
                pageRangeDisplayed={10}
                prevPageText={'‹'}
                nextPageText={'›'}
                onChange={handlePageChange}
                containerClassName={"pagination-ul"}
                activeClassName={"currentPage"}
                previousClassName={"pageLabel-btn"}
                nextClassName={"pageLabel-btn"}
        />
    </div>
    <Footer/>
    </>
  )
}

export default ProductFlightListContainer