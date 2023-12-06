import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductUpdateForm = ({productNo, product, onUpdate}) => {

  const [productId, setProductId] = useState([])
  const [routeNo, setRouteNo] = useState([])
  const [name, setName] = useState([])
  const [productCat, setProductCat] = useState([])
  const [productPrice, setProductPrice] = useState([])
  const [departure, setDeparture] = useState([])
  const [destination, setDestination] = useState([])
  const [description, setDescription] = useState([])
  const [unitsInStock, setUnitsInStock] = useState([])

  const handleChangeProductId = (e) => {
    setProductId(e.target.value)
  }

  const handleChangeRouteNo = (e) => {
    setRouteNo(e.target.value)
 }

 const handleChangeName = (e) => {
    setName(e.target.value)
}

  const handleChangeProductCat = (e) => {
    setProductCat(e.target.value)
  }

  const handleChangeProductPrice = (e) => {
    setProductPrice(e.target.value)
  }

  const handleChangeDeparture = (e) => {
    setDeparture(e.target.value)
  }

  const handleChangeDestination = (e) => {
    setDestination(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleChangeUnitsInStock = (e) => {
    setUnitsInStock(e.target.value)
  }

  const handleUpdate = () => {
    onUpdate(productNo, productId, routeNo, name, productCat, productPrice, departure, destination, description, unitsInStock)
  }

  useEffect(() => {
    if(product) {
    setProductId(product.productId);
    setRouteNo(product.routeNo);
    setName(product.name);
    setProductCat(product.productCat);
    setProductPrice(product.productPrice);
    setDestination(product.destination);
    setDeparture(product.departure);
    setDescription(product.description);
    setUnitsInStock(product.unitsInStock);
    }
  }, [product])
  
  return (
    <div className="container">
      <h1 className="text-center my-5">상품(항공권) 정보 수정</h1>
      <br />

      <div className="input-group mb-3 row">
        <label className="input-group-text col-md-2" id="">번호</label>
        <input type="text" className="form-control col-md-10" name="productNo" value={productNo} readOnly/>
      </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품 이미지</label>
          <input type="file" className="form-control col-md-10" name="file"/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품코드</label>
          <input type="text" className="form-control col-md-10" name="productId" value={productId} onChange={handleChangeProductId}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품명</label>
          <input type="text" className="form-control col-md-10" name="name" value={name} onChange={handleChangeName}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품 가격</label>
          <input type="number" className="form-control col-md-10" name="productPrice" value={productPrice} onChange={handleChangeProductPrice}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text w-100" id="">상세 정보</label>
          <textarea className="form-control" name="description" style={{ height: '200px !important' }} value={description} onChange={handleChangeDescription}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">노선번호</label>
          <input type="text" className="form-control col-md-10" name="routeNo" value={routeNo} onChange={handleChangeRouteNo}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">출발지</label>
          <input type="text" className="form-control col-md-10" name="departure" value={departure} onChange={handleChangeDeparture}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">도착지</label>
          <input type="text" className="form-control col-md-10" name="destination" value={destination} onChange={handleChangeDestination}/>
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">재고 수</label>
          <input type="number" className="form-control col-md-10" name="unitsInStock" value={unitsInStock} onChange={handleChangeUnitsInStock}/>
        </div>

        <div className="input-group mb-3 row">
          <div className="col-md-2 p-0">
            <label className="input-group-text" id="">카테고리</label>
          </div>
          <div className="col-md-10 d-flex align-items-center">
            <input type="hidden" name="temp-category" value={productCat} onChange={handleChangeProductCat} id="temp-category" />
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
        <button className='btn btn-primary' onClick={ () => handleUpdate(productNo, product.productId, product.routeNo, product.name, product.productCat, product.productPrice, product.departure, product.destination, product.description, product.unitsInStock) }>수정</button>
        <button className='btn btn-danger'><Link to="/product">취소</Link></button>
      </div>
    </div>
  );
};


export default ProductUpdateForm