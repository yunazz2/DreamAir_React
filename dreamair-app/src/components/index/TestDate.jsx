import React, { useState } from 'react';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import 'moment/locale/ko';

const TestDate = () => {
  const [dateRange, setDateRange] = useState({
    startDate: moment(),
    endDate: moment(),
  });

  const handleDateRangeChange = (event, picker) => {
    setDateRange({
      startDate: picker.startDate.format('YYYY/MM/DD'),
      endDate: picker.endDate.format('YYYY/MM/DD'),
      
    });

    console.log('New date range selected:', picker.startDate.format('YYYY-MM-DD'), 'to', picker.endDate.format('YYYY-MM-DD'));
  };

  return (
    <div className="container mt-5 py-3">
      <h1 style={{ textAlign: 'center' }}>Date Range Picker</h1>
      <DateRangePicker
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        onApply={handleDateRangeChange}
      >
        <input type="text" id="input-day" className="form-control" />
      </DateRangePicker>
    </div>
  );


  // const [selectedDate, setSelectedDate] = useState('');

  // const handleDateChange = (event, picker) => {
  //   setSelectedDate(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
  // };

  // return (
  //   <DateRangePicker onApply={handleDateChange}>
  //     <input type="text" value={selectedDate} readOnly />
  //   </DateRangePicker>
  // );
};

export default TestDate;
