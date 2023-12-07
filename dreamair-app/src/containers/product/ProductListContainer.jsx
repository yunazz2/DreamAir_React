import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as products from '../../apis/product'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'
import Header from '../../components/fragment/Header'
import ProductList from '../../components/product/ProductList'
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const ProductListContainer = () => {

  const {productNo} = useParams();
  const [productList, setProductList] = useState([]);

  const [currentPost, setCurrentPost] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 5;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    setCurrentPost(productList.slice(indexOfFirstPost, indexOfLastPost));
  }, [productList, page]);

  const getProductList = async() => {
    const response = await products.product_list();
    const data = await response.data;
    console.log(data);
    setProductList(data);
  };

  const onDelete = async (productNo) => {
    const response = await products.product_delete(productNo);
    console.log(response.data);
    alert('삭제 완료')

    // ➡ 게시글 목록 이동
    // navigate('/product')
    getProductList();
  }

  useEffect( () => {
    getProductList();
  }, [])

  return (
    <>
    <Header/>
    <div className='d-flex'>
        <Adminsidebar/>
        <ProductList productList={currentPost} productNo={productNo} onDelete={onDelete}/>
    </div>
    <Pagination activePage={page}
                      itemsCountPerPage={postPerPage}
                      totalItemsCount={productList.length}
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

export default ProductListContainer