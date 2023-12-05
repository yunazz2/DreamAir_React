import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

const TestDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event, picker) => {
    // 단일 날짜를 선택할 때는 startDate와 endDate가 같으므로 startDate를 사용합니다.
    setSelectedDate(picker.startDate.format('YYYY/MM/DD'));
  };

  return (
    <DateRangePicker
      singleDatePicker
      showDropdowns
      onApply={handleDateChange}
    >
      <input type="text" value={selectedDate} readOnly />
    </DateRangePicker>
  );
};

export default TestDate;

