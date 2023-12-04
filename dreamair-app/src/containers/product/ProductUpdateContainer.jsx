import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as product from '../../apis/product'
import ProductUpdateForm from '../../components/product/ProductUpdateForm'

const ProductUpdateContainer = () => {
  const {productNo} = useParams();
  const[product, setProduct] = useState({})

  const navigate = useNavigate()

  const onUpdate = async () => {
    try {
      const response = await product.product_update()
      console.log(response.data);
      alert('수정 완료')

      navigate('/product')
    } catch(e) {
      console.log(e);
    }
  }

  const onDelete = async (productNo) => {
    const response = await product.product_delete(productNo);
    console.log(response.data);
    alert('삭제 완료')

    navigate('/product')
  }

    return (<ProductUpdateForm productNo={productNo} 
                              onUpdate={onUpdate}
                              onDelete={onDelete}
       />)
}

export default ProductUpdateContainer