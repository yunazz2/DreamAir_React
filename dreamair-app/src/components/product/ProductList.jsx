import React from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format'

const ProductList = ( {productList, productNo, onDelete}) => {

  return (
    <div className='container'>
      <h1 className="text-center my-5">상품 관리</h1>
      <div className="btn-box d-grid gap-2">
        <button className='btn btn-outline-primary btn-lg'><Link to="/product/product_insert">상품 등록</Link></button>
      </div>
      <br />

      {/* <form action="/admin/product_delete" method="POST" id="productform" enctype="multipart/form-data"> */}

      {productList !== null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>상품번호</th>
              <th>이미지</th>
              <th>노선번호</th>
              <th>상품명</th>
              <th>카테고리</th>
              <th>가격</th>
              <th>출발지</th>
              <th>도착지</th>
              <th>출발시간</th>
              <th>도착시간</th>
              <th>등록일자</th>
              <th>수정일자</th>
              <th colSpan="2">비고</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.productNo}>
                {/* <td><Link to={`/product/product_list/${product.productNo}`}>{product.productNo}</Link></td> */}
                <td align='center'>{product.productNo}</td>
                <td align='center' style={{width: '100px', height: '100px'}} >{product.thumbnail && (<img src={`/file/img/${product.thumbnail.fileNo}`} alt="이미지" className="card-img-top w-70 p-4" />)}</td>
                <td align='center'>{product.routeNo}</td>
                <td align='center'>{product.name}</td>
                <td align='center'>{product.productCat}</td>
                <td align='center'>{product.productPrice}</td>
                <td align='center'>{product.departure}</td>
                <td align='center'>{product.destination}</td>
                <td align='center'>{product.departureTime}</td>
                <td align='center'>{product.destinationTime}</td>
                <td align='center'>{format.formatDate(product.productRegDate)} </td>
                <td align='center'>{format.formatDate(product.productUpdDate)}</td>

                <div className="btn-box">
                  <td align='right'><button className='btn btn-primary'><Link to={`/product/product_update/${product.productNo}`}>수정</Link></button></td>
                  <td align='right'><button className='btn btn-danger' onClick={ () => onDelete(product.productNo) }>삭제</button></td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {productList === null && (
        <div>
          {productList && productList.length === 0 && <div>등록된 상품(항공권)이 없습니다.</div>}
        </div>
      )}
    </div>
  );
};

export default ProductList