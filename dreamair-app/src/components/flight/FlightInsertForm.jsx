import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as filesApi from '../../apis/files';

const FlightInsertForm = ({ onInsert }) => {
  
  const [flightName, setFlightName] = useState([])
  const [routeNo, setRouteNo] = useState([])
  const [departure, setDeparture] = useState([])
  const [destination, setDestination] = useState([])
  const [departureTime, setDepartureTime] = useState([])
  const [destinationTime, setDestinationTime] = useState([])
  const [seatMax, setSeatMax] = useState([])
  const [seatUsed, setSeatUsed] = useState([])
  const [seatRemaining, setRemaining] = useState([])
  const [files, setFiles] = useState(null);     // ✅ files state 추가
  
  const handleChangeFlightName = (e) => {
      setFlightName(e.target.value)
  }

  const handleChangeRouteNo = (e) => {
    setRouteNo(e.target.value)
 }

  const handleChangeDeparture = (e) => {
    setDeparture(e.target.value)
  }

  const handleChangeDestination = (e) => {
    setDestination(e.target.value)
  }

  const handleChangeDepartureTime = (e) => {
    setDepartureTime(e.target.value)
  }

  const handleChangeDestinationTime = (e) => {
    setDestinationTime(e.target.value)
  }

  const handleChangeSeatMax = (e) => {
    setSeatMax(e.target.value)
  }

  const handleChangeSeatUsed = (e) => {
    setSeatUsed(e.target.value)
  }

  const handleChangeRemaining = (e) => {
    setRemaining(e.target.value)
  }
  
   // ✅ 파일 핸들러 추가
   const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = () => {
    // onInsert(flightName, routeNo, departure, destination, departureTime, destinationTime, seatMax, seatUsed, seatRemaining)
    const formData = new FormData();
    formData.append('flightName', flightName);
    formData.append('routeNo', routeNo);
    formData.append('departure', departure);
    formData.append('departureTime', departureTime);
    formData.append('destinationTime', destinationTime);
    formData.append('seatMax', seatMax);
    formData.append('seatUsed', seatUsed);
    formData.append('seatRemaining', seatRemaining);

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

    onInsert(formData, headers)            
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
    <div className='container'>
      <h1 className="text-center my-5">항공기 정보 등록</h1>
      <br />

      <div className="row g-3">
        <div className="input-group mb-3 row">
          <label htmlFor="flightname" className="input-group-text col-md-2">항공기명</label>
          <input type="text" className="form-control col-md-10" name="flightName" value={flightName} placeholder="항공기명" onChange={handleChangeFlightName} />
        </div>

        <div className="input-group mb-3 row">
          <label className="input-group-text col-md-2">항공기 이미지</label>
          <input type="file" className="form-control col-md-10" name="file" onChange={handleFileChange} multiple/>
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="routeNo" className="input-group-text col-md-2">노선번호</label>
          <input type="text" className="form-control col-md-10" name="routeNo" value={routeNo} placeholder="노선번호" onChange={handleChangeRouteNo} />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="departure" className="input-group-text col-md-2">출발지</label>
          <input type="text" className="form-control col-md-10" name="departure" value={departure} placeholder="출발지" onChange={handleChangeDeparture}/>
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="destination" className="input-group-text col-md-2">도착지</label>
          <input type="text" className="form-control col-md-10" name="destination" value={destination} placeholder="도착지" onChange={handleChangeDestination} />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="departureTime" className="input-group-text col-md-2">출발시간</label>
          <input type="text" className="form-control col-md-10" name="departureTime" value={departureTime} placeholder="출발시간" onChange={handleChangeDepartureTime} />
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="destinationTime" className="input-group-text col-md-2">도착시간</label>
          <input type="text" className="form-control col-md-10" name="destinationTime" value={destinationTime} placeholder="도착시간" onChange={handleChangeDestinationTime}/>
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="seatMax" className="input-group-text col-md-2">좌석 수</label>
          <input type="text" className="form-control col-md-10" name="seatMax" value={seatMax} placeholder="좌석 수" onChange={handleChangeSeatMax}/>
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="seatUsed" className="input-group-text col-md-2">사용 중인 좌석 수</label>
          <input type="text" className="form-control col-md-10" name="seatUsed" value={seatUsed} placeholder="사용 중인 좌석 수" onChange={handleChangeSeatUsed}/>
        </div>

        <div className="input-group mb-3 row">
          <label htmlFor="seatRemaining" className="input-group-text col-md-2">잔여 좌석 수</label>
          <input type="text" className="form-control col-md-10" name="seatRemaining" value={seatRemaining} placeholder="잔여 좌석 수" onChange={handleChangeRemaining}/>
        </div>
      </div>

      <hr className="my-4" />

      <div className="btn-box">
        <button className='btn btn-danger btn-basic'><Link to="/flight">취소</Link></button>
        <button className='btn btn-primary btn-basic' onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
};

export default FlightInsertForm