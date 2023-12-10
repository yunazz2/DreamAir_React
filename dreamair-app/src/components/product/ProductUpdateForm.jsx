import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as filesApi from '../../apis/files'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ProductUpdateForm = ({productNo, product, onUpdate, onDelete, onDownload, onDeleteFile}) => {

  const [productId, setProductId] = useState([])
  const [routeNo, setRouteNo] = useState([])
  const [name, setName] = useState([])
  const [productCat, setProductCat] = useState([])
  const [productPrice, setProductPrice] = useState([])
  const [departure, setDeparture] = useState([])
  const [destination, setDestination] = useState([])
  const [description, setDescription] = useState([])
  const [unitsInStock, setUnitsInStock] = useState([])

  const [files, setFiles] = useState(null);           // ✅ files state 추가
  const [fileNoList, setFileList] = useState([])      // ✅ 파일 선택 삭제 - deleteFileNoList

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

    console.log(`fileNoList --------------------------------------`);
    console.log(fileNoList);
    formData.append('deleteFileNoList', fileNoList);

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

    onUpdate(formData, headers);
  }

  const handleDelete = () => {
    const check = window.confirm('정말로 삭제하시겠습니까?')
    if( check ) 
        onDelete(productNo)
}

    const handleDownload = (fileNo, fileName) => {
        onDownload(fileNo, fileName)
    }

    const handleDeleteFile =(fileNo) => {

        const check = window.confirm('정말로 삭제하시겠습니까?')
        if( check )
            onDeleteFile(fileNo)
    }

    // ✅ 파일 핸들러 추가
    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };


    // 파일 번호 체크
    const checkFileNo = (productNo) => {
        setFileList( [...fileNoList, productNo] )
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
                // axios
                //   .post("http://localhost:8080/api/v0/file/upload", formData)
                //   .then((res) => {
                //     resolve({
                //       default: res.data.data.uri,
                //     });
                //   })
                //   .catch((err) => reject(err));
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
      <h1 className="text-center my-5">상품(항공권) 정보 수정</h1>
      <br />

      <div className="input-group mb-3 row">
        <label className="input-group-text col-md-2" id="">번호</label>
        <input type="text" className="form-control col-md-10" name="productNo" value={productNo} readOnly/>
      </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2" id="">상품 이미지</label>
          <input type="file" className="form-control col-md-10" name="file" multiple/>
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
          {/* <textarea className="form-control" name="description" style={{ height: '200px !important' }} value={description} onChange={handleChangeDescription}/> */}
          { description && 
                            <CKEditor editor={ ClassicEditor }
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
                                            height: 500, // Set the desired height in pixels
                                        },
                                        alignment: {
                                            options: ['left', 'center', 'right', 'justify'],
                                        },
                                        
                                        extraPlugins: [uploadPlugin]            // 업로드 플러그인
                                    }}
                                    data={ description }
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
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
                        
                        }
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