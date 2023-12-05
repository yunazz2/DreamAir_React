import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as product from '../../apis/product'
import * as file from '../../apis/files'
import ProductInsertForm from '../../components/product/ProductInsertForm'

const ProductInsertContainer = () => {
  const navigate = useNavigate()

  const onInsert = async (productId, file, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock) => {
    try {
      const response = await product.product_insert(productId, file, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock) 

      alert('등록 완료')
      console.log(response.data);

      navigate('/product')

    }
    catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <ProductInsertForm onInsert={onInsert} />
    </>
  )
}

export default ProductInsertContainer