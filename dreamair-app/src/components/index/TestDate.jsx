import React, { useState } from 'react';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
// import { Calendar } from 'react-date-range'
import moment from 'moment';

const TestDate = () => {
  const [dateRange, setDateRange] = useState({
    startDate: moment(),
    endDate: moment(),
  });

  const handleDateRangeChange = (event, picker) => {
    setDateRange({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });

    console.log('New date range selected:', picker.startDate.format('YYYY-MM-DD'), 'to', picker.endDate.format('YYYY-MM-DD'));
  };

  const customOptions = {
    singleDatePicker: true,
    autoApply: true,
    minYear: 1000,
    maxYear: 9999,
    locale: {
      format: 'YYYY/MM/DD',
      separator: ' ~ ',
      applyLabel: '확인',
      cancelLabel: '취소',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      weekLabel: '주',
      daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
      monthNames: [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월',
      ],
      firstDay: 1,
    },
  };

  return (
    <div className="container mt-5 py-3">
      <h1 style={{ textAlign: 'center' }}>Date Range Picker</h1>
      <DateRangePicker
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        onApply={handleDateRangeChange}
        options={customOptions}
      >
        <input type="text" id="input-day" className="form-control" />
      </DateRangePicker>
    </div>
  );
};

export default TestDate;
