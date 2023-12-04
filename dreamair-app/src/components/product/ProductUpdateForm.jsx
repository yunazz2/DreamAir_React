import React from 'react'
import { Link } from 'react-router-dom';

const ProductUpdateForm = ({product, file, productNo, productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock, onUpdate}) => {
  const handleUpdate = () => {
    onUpdate(productNo, productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock)
  }
  
  return (
    <div className="container">
      <h1 className="text-center my-5">상품(항공권) 정보 수정</h1>
      <br />

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품 이미지</label>
          <input type="file" className="form-control col-md-10" name="file" value={file.File} />
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품명</label>
          <input type="text" className="form-control col-md-10" name="name" value={product.name}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품 가격</label>
          <input type="number" className="form-control col-md-10" name="productPrice" value={product.productPrice}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text w-100" id="">상세 정보</label>
          <textarea className="form-control" name="description" style={{ height: '200px !important' }} value={product.description}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">노선번호</label>
          <input type="text" className="form-control col-md-10" name="routeNo" value={product.routeNo}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">출발지</label>
          <input type="text" className="form-control col-md-10" name="departure" value={product.departure}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">도착지</label>
          <input type="text" className="form-control col-md-10" name="destination" value={product.destination} />
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">재고 수</label>
          <input type="number" className="form-control col-md-10" name="unitsInStock" value={product.unitsInStock}/>
        </div>

        <div className="input-group mb-3 row">
          <div className="col-md-2 p-0">
            <label className="input-group-text" id="">카테고리</label>
          </div>
          <div className="col-md-10 d-flex align-items-center">
            <input type="hidden" name="temp-category" value={product.productCat} id="temp-category" />
            <div className="radio-box d-flex">
              <div className="radio-item mx-5">
                <input
                  type="radio"
                  className="form-check-input"
                  name="category"
                  value="ticket"
                  id="category-ticket"
                />
                <label htmlFor="category-ticket">항공권</label>
              </div>

              <div className="radio-item mx-5">
                <input
                  type="radio"
                  className="form-check-input "
                  name="category"
                  value="travle"
                  id="category-travle"
                />
                <label htmlFor="category-old">여행상품</label>
              </div>

              <div className="radio-item mx-5">
                <input
                  type="radio"
                  className="form-check-input "
                  name="category"
                  value="goods"
                  id="category-goods"
                />
                <label htmlFor="category-re">여행 필수품</label>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

      <div className="d-flex justify-content-between">
        <button className='btn btn-primary' onClick={ () => onUpdate(productNo, productId, routeNo, name, productCat, productPrice, departure, destination, productRegdate, productUpdate, description, unitsInStock) }>수정</button>
        <button className='btn btn-danger'><Link to="/product">취소</Link></button>
      </div>
    </div>
  );
};


export default ProductUpdateForm