import React, { useState } from 'react';
import Select from 'react-select';

const TicketSearch = ({ flightNo, onSearch }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: '0', label: '선택' },
    { value: '1', label: '체크인 완료' },
    { value: '2', label: '탑승 완료' },
  ];

  const handleChangeSelect = (selected) => {
    setSelectedOption(selected);
  };

  const onSubmit = () => {
    const selectedValue = selectedOption ? selectedOption.value : '0';
    onSearch(flightNo, selectedValue);
  };

  return (
      <div className="d-grid">
        <div className="d-flex">
          <label htmlFor="flightNo" className="" style={{ lineHeight: '50px' }}>항공기 번호 조회 : </label>
          <input type="text" className="" style={{ lineHeight: '50px', width: '200px' }} id="filter" name="flightNo" placeholder='항공기 번호 입력'/>
          <Select
            className="select"
            id="searchType"
            name="select"
            value={selectedOption}
            onChange={handleChangeSelect}
            options={options}
          />
        </div>
        <button onClick={() => onSubmit(flightNo)} className="btn btn-outline-primary btn-lg">항공기 조회</button>
      </div>
  );
};

export default TicketSearch;
