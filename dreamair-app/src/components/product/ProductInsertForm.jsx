import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as filesApi from '../../apis/files'

const ProductInsertForm = ({ onInsert }) => {
  
    const [productId, setProductId] = useState([])
    const [routeNo, setRouteNo] = useState([])
    const [name, setName] = useState([])
    const [productCat, setProductCat] = useState([])
    const [productPrice, setProductPrice] = useState([])
    const [departure, setDeparture] = useState([])
    const [destination, setDestination] = useState([])
    const [description, setDescription] = useState([])
    const [unitsInStock, setUnitsInStock] = useState([])
    const [files, setFiles] = useState(null)  // ✅ files state 추가

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

    // ✅ 파일 핸들러 추가
    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const onSubmit = () => {
        // onInsert(productId, routeNo, name, productCat, productPrice, departure, destination, description, unitsInStock)
        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('routeNo', routeNo);
        formData.append('name', name);
        formData.append('productCat', productCat);
        formData.append('productPrice', productPrice);
        formData.append('departure', departure);
        formData.append('destination', destination);
        formData.append('description', description);
        formData.append('unitsInStock', unitsInStock);

        const headers = {
            headers: {
                'Content-Type' : 'multipart/form-data',
            },
        };

        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append(`files[${i}]`, files[i]);
            }
        }

        onInsert(formData, headers)                             // formData 사용 ⭕
    }

    const customUploadAdapter = (loader) => {
        return {
        upload() {
            return new Promise( (resolve, reject) => {
            const formData = new FormData();
            loader.file.then( async (file) => {
                    console.log(file);
                    formData.append("parentTable", 'editor');
                    formData.append("file", file);

                    const headers = {
                        headers: {
                            'Content-Type' : 'multipart/form-data',
                        },
                    };

                    let response = await filesApi.upload(formData, headers);
                    let data = await response.data;
                    console.log(`data : ${data}`);
                    
                    let newFileNo = data;

                    await resolve({
                        default: `/file/img/${newFileNo}`
                    })
            });
            });
        },
        };
    };

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        };
    }
  
  
  return (
    
    <div className="container">
      <h1 className="text-center my-3">상품(항공권) 정보 등록</h1>
          <div className="input-group mb-3 row">
            <label className="input-group-text col-md-2" id="">상품코드</label>
            <input type="text" className="form-control col-md-10" name="productId" value={productId} onChange={handleChangeProductId}/>
          </div>

          <div className="input-group mb-3 row">
            <label className="input-group-text col-md-2" id="">상품명</label>
            <input type="text" className="form-control col-md-10" name="name" value={name} onChange={handleChangeName}/>
          </div>

          <div className="input-group mb-3 row">
            <label className="input-group-text col-md-2" id="">상품 이미지</label>
            <input type="file" className="form-control col-md-10" name="file" onChange={handleFileChange} multiple/>
          </div>

          <div className="input-group mb-3 row">
            <label className="input-group-text col-md-2" id="">상품 가격</label>
            <input type="number" className="form-control col-md-10" name="productPrice"  value={productPrice} onChange={handleChangeProductPrice}/>
          </div>

          <div className="input-group mb-3 row">
            <label className="input-group-text w-100" id="">상세 정보</label>
            {/* <textarea className="form-control" name="description" style={{ height: '200px' }} value={description} onChange={handleChangeDescription}/> */}
            <CKEditor className="w-100"
              editor={ ClassicEditor }
              config={{
              placeholder: "내용을 입력하세요.",
              toolbar: {
                  items: [
                      'undo', 'redo',
                      '|', 'heading',
                      '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                      '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                      '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                      '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                      '|', 'mediaEmbed',
                  ],
                  shouldNotGroupWhenFull: false
              },
              editorConfig: {
                  height: 500
              },
              alignment: {
                  options: ['left', 'center', 'right', 'justify'],
              },
              
              extraPlugins: [uploadPlugin]            // 업로드 플러그인
          }}
          data=""
          onReady={ editor => {
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
              setDescription(data);
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
          />
          </div>

          <div className="input-group mb-3 row">
            <label className="input-group-text col-md-2" id="">노선번호</label>
            <input type="text" className="form-control col-md-10" name="routeNo" value={routeNo} onChange={handleChangeRouteNo} />
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
              <label className="input-group-text" name="productCat" id="productCat">카테고리</label>
            </div>
            <div className="col-md-10 d-flex align-items-center">
              <input type="hidden" name="temp-category" id="temp-category" value={productCat} onChange={handleChangeProductCat}/>
              <div className="radio-box d-flex">
                <div className="radio-item mx-5">
                  {/* <input type="radio" className="form-check-input" name="productCat" value="ticket" onChange={(ticket) => handleChangeProductCat(ticket.target.value)} id="category-ticket"/> */}
                  <input type="radio" className="form-check-input" name="productCat" value="ticket" onChange={handleChangeProductCat} id="category-ticket"/>
                  <label htmlFor="category-ticket">항공권</label>
                </div>

                <div className="radio-item mx-5">
                  <input type="radio" className="form-check-input" name="productCat" value="travle" onChange={handleChangeProductCat} id="category-travle"/>
                  <label htmlFor="category-old">여행상품</label>
                </div>

                <div className="radio-item mx-5">
                  <input type="radio" className="form-check-input" name="productCat" value="goods" onChange={handleChangeProductCat} id="category-goods"/>
                  <label htmlFor="category-re">여행 필수품</label>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="btn-box">
            <button className='btn btn-danger btn-basic'><Link to="/product">취소</Link></button>
            <button className='btn btn-primary btn-basic' onClick={ onSubmit }>등록</button>
          </div>
      </div>
  );
};

export default ProductInsertForm