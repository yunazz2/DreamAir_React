import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as product from '../../apis/product'
import ProductList from '../../components/product/ProductList'

const ProductListContainer = () => {

  const navigate = useNavigate()

  const {productNo} = useParams();
  const [productList, setProductList] = useState([]);

  const getProductList = async() => {
    const response = await product.product_list();
    const data = await response.data;
    console.log(data);
    setProductList(data);
  };

  const onDelete = async (productNo) => {
    const response = await product.product_delete(productNo);
    console.log(response.data);
    alert('삭제 완료')

    navigate('/product')
  }

  useEffect( () => {
    getProductList();
  }, [])

  return <ProductList productList={productList}
                      productNo={productNo}
                      onDelete={onDelete}
                      />                      
    
}

export default ProductListContainer