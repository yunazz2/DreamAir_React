import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'moment/locale/ko';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { addDays } from 'date-fns';
import { BookingContext } from '../../contexts/BookingContextProvider';
import { Link } from 'react-router-dom';
import QuickMenu from './QuickMenu';

const SearchFlight = () => {

  const {booking, setBooking} = useContext(BookingContext);
  const [showPassengerBox, setShowPassengerBox] = useState(false);
  
  // ------------ 왕복 -------------
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;

    const startYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(start);
    const startMonth = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(start);
    const startDay = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(start);
    
    const endYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(end);
    const endMonth = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(end);
    const endDay = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(end);

    const departureDate = `${startYear}/${startMonth}/${startDay} ~ ${endYear}/${endMonth}/${endDay}`;

    setStartDate(start);
    setEndDate(end);
    setBooking({...booking, departureDate})
  };
  // ------------ 왕복 -------------
  
  // ------------ 편도 -------------
  const [singleDate, setSingleDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    const departureDate = `${year}/${month}/${day}`;
    
    setSingleDate(date);
    setBooking({...booking, departureDate})
  };
  // ------------ 편도 -------------

  const handleRoundTripChange = (value) => {
    const roundTrip = value
    setBooking({...booking, roundTrip})
  };

  const handleDepartureChange = (value) => {
    const departure = value
    setBooking({...booking, departure})
  };

  const handleDestinationChange = (value) => {
    const destination = value
    setBooking({...booking, destination})
  };

  // ------------------ 탑승객 ---------------------
  let pasCount = booking.pasCount

  const handlePasCountChange = (value) => {
    console.log(value);
    setBooking({...booking, pasCount})
  };
  
  useEffect( () => {
    handlePasCountChange(pasCount)
  }, [pasCount])
  
  const handleIconClick = () => {
    setShowPassengerBox(true);
  };
  
  const handleDecrease = () => {
    if (booking.pasCount > 1) {
      --pasCount
      setBooking({...booking, pasCount})
    }
  };
  
  const handleIncrease = () => {
    ++pasCount
    setBooking({...booking, pasCount})
  };
   // ------------------ 탑승객 ---------------------

  const handleSubmit = (e) => {
    // e.preventDefault();

    console.log("roundTrip : " + booking.roundTrip);
    console.log("departure : " + booking.departure);
    console.log("destination : " + booking.destination);
    console.log("pasCount : " + booking.pasCount);
    console.log("departureDate : " + booking.departureDate);

    console.log('폼 제출됨!');
  };

  return (
      <section id="searchFlight">
        <Container className='search_container'>
          <QuickMenu/>
          <div className="search_card card-4">
            <div className="tab-content">
              <div className="tab-pane active" id="tab1">
                <div className="tab_wrap">
                  <Form id="frm" className="style=margin-top: -20px;">
                    <Row className="radio-btn d-flex py-2">
                      {/* <Col> */}
                        <Form.Check className='radio_form'
                          type="radio"
                          label="왕복"
                          id="round"
                          checked={booking.roundTrip === '왕복 가는편'}
                          onChange={() => handleRoundTripChange('왕복 가는편')}
                        />
                      {/* </Col> */}
                      {/* <Col> */}
                        <Form.Check className='radio_form'
                          type="radio"
                          label="편도"
                          id="eachWay"
                          checked={booking.roundTrip === '편도'}
                          onChange={() => handleRoundTripChange('편도')}
                        />
                      {/* </Col> */}
                    </Row >

                    <div className="search-box">
                    <Row>
                      <Col className='select_box'>
                        <Form.Floating className='select_departure'>
                          <Form.Select
                            id="floatingSelectGrid"
                            value={booking.departure}
                            onChange={(e) => handleDepartureChange(e.target.value)}
                          >
                            <option value="출발지" disabled>출발지</option>
                            <option value="김포">김포</option>
                            <option value="제주">제주</option>
                            <option value="울산">울산</option>
                            <option value="부산">부산</option>
                            <option value="여수">여수</option>
                          </Form.Select>
                          <label htmlFor="floatingSelectGrid">출발지</label>
                        </Form.Floating>
                      </Col>
                      <Col className='select_box'>
                        <Form.Floating className='select_destination'>
                          <Form.Select
                            id="floatingSelectGrid"
                            value={booking.destination}
                            onChange={(e) => handleDestinationChange(e.target.value)}
                          >
                            <option value="도착지" disabled>도착지</option>
                            <option value="김포">김포</option>
                            <option value="제주">제주</option>
                            <option value="울산">울산</option>
                            <option value="부산">부산</option>
                            <option value="여수">여수</option>
                          </Form.Select>
                          <label htmlFor="floatingSelectGrid">도착지</label>
                        </Form.Floating>
                      </Col>
                      <Col className='select_box'>
                          {(booking.roundTrip === '왕복 가는편') && (
                            <Form.Floating className='form_trip'>
                                <Form.Control 
                                  type="text"
                                  placeholder="yyyy/mm/dd"
                                  id="input-start"
                                />
                              <label htmlFor="floatingSelectGrid">여정</label>
                                <DatePicker className='datepicker'
                                  selected={startDate}
                                  onChange={onChange}
                                  startDate={startDate}
                                  endDate={endDate}
                                  excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                                  selectsRange
                                  selectsDisabledDaysInRange
                                  dateFormat="yyyy/MM/dd"
                                  locale={ko} 
                                />
                            </Form.Floating>
                          )}

                          {(booking.roundTrip === '편도') && (
                            <Form.Floating className='form_trip'>
                                <Form.Control
                                  type="text"
                                  placeholder="yyyy/mm/dd"
                                  id="input-start"
                                />
                              <label htmlFor="floatingSelectGrid">여정</label>
                                <DatePicker className='datepicker'
                                  selected={singleDate}
                                  onChange={handleDateChange}
                                  dateFormat="yyyy/MM/dd" 
                                  locale={ko} 
                                  id="input-start"
                                />
                            </Form.Floating>
                          )}
                      </Col>
                      <Col className='select_box'>
                        <div className="passenger">
                          <Form.Floating  className='form_passenger'>
                            <div className="text-center" id='icon_click' onClick={handleIconClick}>
                              <label htmlFor="passenger_title">탑승객</label>
                              <Form.Control className="form-control " readOnly />
                            </div>
                            {showPassengerBox && (
                              <div className="number_box">
                                <div className="d-flex position-absolute bottom-0">
                                  <Button type="button" className="down btn btn-danger" onClick={handleDecrease}>
                                    -
                                  </Button>
                                  <Form.Control className="inputQty text-center"
                                    type="number"
                                    min="0"
                                    max="999"
                                    value={booking.pasCount}
                                    id="adult"
                                    onChange={(e) => handlePasCountChange(e.target.value)}
                                  />
                                  <Button type="button" className="up btn btn-success" onClick={handleIncrease}>
                                    +
                                  </Button>
                                </div>
                              </div>
                            )}
                          </Form.Floating>
                        </div>
                      </Col>
                    </Row>
                    </div>
                    <div className="search_btn pt-3">
                      <Link to="/booking/bookingList">
                        <Button id="booking_btn" onClick={handleSubmit} className="btn btn-primary">
                          검색
                        </Button>
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
  );
};

export default SearchFlight;
