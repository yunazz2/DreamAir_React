import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as products from '../../apis/product'
import * as files from '../../apis/files'
import ProductUpdateForm from '../../components/product/ProductUpdateForm'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const ProductUpdateContainer = () => {

  const {productNo} = useParams();
  
  const[product, setProduct] = useState({})
  const [fileList, setFileList] = useState([])
  const [isLoading, setLoading] = useState(false);
  
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

    const onDownload = async (fileNo, fileName) => {
        const response = await files.download(fileNo);
        console.log(response);

        // 서버에서 반환된 파일 데이터를 Blob으로 변환
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const onDeleteFile = async (fileNo) => {
        try {
            // 파일 삭제 요청
            const response = await files.remove(fileNo);
            console.log(response.data);

            // fileList에서 fileNo와 일치하는 객체를 filter하여 새로운 배열 생성
            const updatedFileList = fileList.filter((file) => file.no !== fileNo);

            // setFileList로 상태 업데이트
            setFileList(updatedFileList);
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

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
          <ProductUpdateForm productNo={productNo} onUpdate={onUpdate} onDelete={onDelete} product={product}
                             fileList={fileList} 
                             isLoading={isLoading}
                             onDownload={(fileNo, fileName) => onDownload(fileNo, fileName)}
                             onDeleteFile={(fileNo) => onDeleteFile(fileNo)}
          />
      </div>
      <Adminfooter/>  
      </>
    )
}

export default ProductUpdateContainer