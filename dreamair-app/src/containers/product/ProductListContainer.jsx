import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as products from '../../apis/product'
import ProductList from '../../components/product/ProductList'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const ProductListContainer = () => {

  const navigate = useNavigate();

  const {productNo} = useParams();
  const [productList, setProductList] = useState([]);

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
        <ProductList productList={productList} productNo={productNo} onDelete={onDelete}/>
    </div>
    <Adminfooter/>  
    </>
  )
}

export default ProductListContainer