import React, { useState } from 'react'
// import Select from 'react-select'

const TicketSearch = ({flightNo, onSearch}) => {

  const [selected, setSelected] = useState('0');

  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  }

  const onSubmit = () => {
    onSearch(flightNo, selected)
  }

  return (
    <div className='container'>
        <div className="btn-box d-grid gap-2 ">
          <div className="form-floating col-5">
            <div className="input-group has-validation">
              <label htmlFor="flightNo" className="form-label me-3" style={{ lineHeight: '50px' }}>항공기 번호 조회 : </label>
              <input type="text" className="form-control me-3" style={{ lineHeight: '30px', width: '200px' }} id="filter" name="flightNo" placeholder="항공기 번호" />
              <select className="form-select" id="searchType" name="select" onChange={handleChangeSelect} value={selected}>
                <option value="0">선택</option>
                <option value="1">체크인 완료</option>
                <option value="2">탑승완료</option>
              </select>
            </div>
          </div>
          <button onClick={onSubmit} className="btn btn-outline-primary btn-lg">항공기 조회</button>
        </div>
    </div>
  )
}

export default TicketSearch