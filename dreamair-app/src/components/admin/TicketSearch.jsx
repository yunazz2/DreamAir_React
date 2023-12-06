import React, { useState } from 'react';
import Select from 'react-select';

const TicketSearch = ({ onSearch }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [flightNo, setFlightNo] = useState(0);

  const options = [
    { value: '0', label: '선택' },
    { value: '1', label: '체크인 완료' },
    { value: '2', label: '탑승 완료' },
  ];

  const handleChangeSelect = (selected) => {
    console.log('＠＠＠＠＠＠＠＠ handleChangeSelect');
    console.log('selected : ' + selected.value);      // selected 는 [Object] ➡  selected.value 가 값 (0,1,2)
    setSelectedOption(selected);
  };

  const handleFlightNo = (e) => {
    console.log(`input flightNo : ${e.target.value}`);
    setFlightNo(e.target.value);
  };



  const onSubmit = () => {
    console.log('☆☆☆☆☆☆☆☆☆☆ TickeSearch');
    console.log('flight No : ' + flightNo);
    const selectedValue = selectedOption ? selectedOption.value : '0';
    onSearch(flightNo, selectedValue);
  };

  return (
      <div className="d-grid">
        <div className="d-flex">
          <label htmlFor="flightNo" className="" style={{ lineHeight: '50px' }}>항공기 번호 조회 : </label>
          <input type="text" className="" 
                 style={{ lineHeight: '50px', width: '200px' }} id="filter" name="flightNo" placeholder='항공기 번호 입력'
                 onChange={ handleFlightNo }
                 />
          <Select
            className="select"
            id="searchType"
            name="select"
            value={selectedOption}
            onChange={handleChangeSelect}
            options={options}
          />
        </div>
        <button onClick={() => {onSubmit()}} className="btn btn-outline-primary btn-lg">항공기 조회</button>
      </div>
  );
};

export default TicketSearch;
