import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as products from '../../apis/product'
import ProductUpdateForm from '../../components/product/ProductUpdateForm'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const ProductUpdateContainer = () => {

  const {productNo} = useParams();
  
  const[product, setProduct] = useState({})

  const navigate = useNavigate()

  const onUpdate = async (productId, routeNo, name, productCat, productPrice, departure, destination, description, unitsInStock) => {
    try {
      const response = await products.product_update(productId, routeNo, name, productCat, productPrice, departure, destination, description, unitsInStock)
      console.log(response.data);
      alert('수정 완료')

      navigate('/product')
    } catch(e) {
      console.log(e);
    }
  }

  const onDelete = async (productNo) => {
    const response = await products.product_delete(productNo);
    console.log(response.data);
    alert('삭제 완료')

    navigate('/product')
  }

  const getProduct = async () => {
    try {
      const response = await products.product_select(productNo);
      const data = response.data
      console.log(data);
      setProduct(data)
    }
    catch(e) {
      console.log(e);
    }
}
  useEffect(() => {
    getProduct()
  }, [])
  
    return (
      <>
      <Header/>
      <div className='d-flex'>
          <Adminsidebar/>
          <ProductUpdateForm productNo={productNo} onUpdate={onUpdate} onDelete={onDelete} product={product}/>
      </div>
      <Adminfooter/>  
      </>
    )
}

export default ProductUpdateContainer