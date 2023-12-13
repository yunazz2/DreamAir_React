import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BookingContext } from '../../contexts/BookingContextProvider';
import { Link } from 'react-router-dom';

const InfoForm = ( {onInsert} ) => {

  const {booking, setBooking} = useContext(BookingContext)
  const [userPw, setUserPw] = useState('');

  const handleuserPwChange = (e) => {
    setUserPw(e.target.value)
  }

  const handleGenderChange = (i, newGender) => {
    setPassengerData(prevPassengerData => {
      const updatedPassengerData = [...prevPassengerData];
      updatedPassengerData[i].gender = newGender;
      return updatedPassengerData;
    });
  };
  
  const [passengerData, setPassengerData] = useState(
    [...Array(booking.pasCount)].map(() => ({
      passengerName : '',
      firstName: '',
      lastName: '',
      gender: '남자', // 초기값 설정
      birth: '',
      pinType: '1', // 초기값 설정
      phone: '',
      email: '',
    }))
  );

  const handleInputChange = (index, fieldName, value) => {
    const newPassengerData = [...passengerData];
    newPassengerData[index][fieldName] = value;
    setPassengerData(newPassengerData);
  };
    
    const onSubmit = () => {
      const passengerNames = passengerData.map(passenger => passenger.passengerName);
      const firstNames = passengerData.map(passenger => passenger.firstName);
      const lastNames = passengerData.map(passenger => passenger.lastName);
      const genders = passengerData.map(passenger => passenger.gender);
      const births = passengerData.map(passenger => passenger.birth);
      const pinTypes = passengerData.map(passenger => passenger.pinType);
      const phones = passengerData.map(passenger => passenger.phone);
      const emails = passengerData.map(passenger => passenger.email);

      setBooking({...booking, passengerNames, phones})

      if (booking.roundTrip === '왕복') {
        let params = {
          roundTrip : booking.roundTrip,
          pasCount : booking.pasCount,
          productNoDep : booking.productNoDep,
          productNoDes : booking.productNoDes,
          routeNoDep : booking.routeNoDep,
          routeNoDes : booking.routeNoDes,
          passengerNames :  passengerNames,
          firstNames :  firstNames,
          lastNames :  lastNames,
          genders :  genders,
          births :  births,
          pinTypes :  pinTypes,
          phones :  phones,
          emails :  emails,
          userPw : userPw
        }
        
        console.log(params);
        onInsert(params)
      } else {
        let params = {
          roundTrip : booking.roundTrip,
          pasCount : booking.pasCount,
          productNoDep : booking.productNoDep,
          routeNoDep : booking.routeNoDep,
          passengerNames :  passengerNames,
          firstNames :  firstNames,
          lastNames :  lastNames,
          genders :  genders,
          births :  births,
          pinTypes :  pinTypes,
          phones :  phones,
          emails :  emails,
          userPw : userPw
        }

        console.log(params);
        onInsert(params)
      }
    }

  return (
    <Container className="container mt-3 py-3">
      <h1 style={{ textAlign: 'center' }}>탑승객 정보입력</h1>
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>신분증 정보와 동일하게 입력해주세요.</h3>
      <br />
      <div className="img_container text-center">
        <img src="/img/insert_information.png" alt="정보입력" />
      </div>
      <br /><br />

      <Form>
       <div className="PassengerFormContainer">
        {passengerData.map((passenger, i) => (
          <div key={i}>
            <h2>탑승객 {i + 1}</h2>

            <Form.Group className="PassengerForm mb-3 row">
              <Form.Label className="col-md-2">이름</Form.Label>
              <Col md={10}>
                <Form.Control className="PassengerForm_input" type="text" value={passenger.passengerName} onChange={(e) => handleInputChange(i, 'passengerName', e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group className="PassengerForm mb-3 row">
              <Form.Label className="col-md-2">이름(영문)</Form.Label>
              <Col md={10}>
                <Form.Control className="PassengerForm_input" type="text" value={passenger.firstName} onChange={(e) => handleInputChange(i, 'firstName', e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group className="PassengerForm mb-3 row">
              <Form.Label className="col-md-2">성(영문)</Form.Label>
              <Col md={10}>
              <Form.Control className="PassengerForm_input" type="text" value={passenger.lastName} onChange={(e) => handleInputChange(i, 'lastName', e.target.value)} />
              </Col>
            </Form.Group>

            <div className="PassengerRadio radio-row" style={{ marginBottom: '20px' }}>
              <Form.Check
                type="radio"
                id={`male_${i}`}
                className="male"
                value="남자"
                checked={passenger.gender === '남자'}
                onChange={() => handleGenderChange(i, '남자')}
              />
              <Form.Label htmlFor={`male_${i}`} className="m-r-45">
                남자
              </Form.Label>
              <Form.Check
                type="radio"
                id={`female_${i}`}
                className="female"
                value="여자"
                checked={passenger.gender === '여자'}
                onChange={() => handleGenderChange(i, '여자')}
              />
              <Form.Label htmlFor={`female_${i}`} className="m-r-45">
                여자
              </Form.Label>
            </div>

            <Form.Group className="PassengerForm mb-3 row">
              <Form.Label className="col-md-2">생년월일</Form.Label>
              <Col md={10}>
                <Form.Control className="PassengerForm_input" type="text" value={passenger.birth} onChange={(e) => handleInputChange(i, 'birth', e.target.value)} />
              </Col>
            </Form.Group>

            <div className="PassengerForm form-floating input-group mb-3 row">
                <Form.Select className="PassengerForm_label" name="pinTypes" id="floatingSelectGrid" aria-label="Floating label select example"
                    value={passenger.pinType} onChange={(e) => handleInputChange(i, 'pinType', e.target.value)}>
                    <option value="1">주민등록증</option>
                    <option value="2">여권</option>
                    <option value="3">운전면허증</option>
                </Form.Select>
                <Form.Label htmlFor="floatingSelectGrid">신분증</Form.Label>
            </div>

            <Form.Group className="PassengerForm mb-3 row">
              <Form.Label className="col-md-2">핸드폰 번호</Form.Label>
              <Col md={10}>
                <Form.Control className="PassengerForm_input" type="text" value={passenger.phone} onChange={(e) => handleInputChange(i, 'phone', e.target.value)} />
              </Col>
            </Form.Group>
            
            <Form.Group className="PassengerForm mb-3 row">
              <Form.Label className="col-md-2">이메일</Form.Label>
              <Col md={10}>
                <Form.Control className="PassengerForm_input" type="text" value={passenger.email} onChange={(e) => handleInputChange(i, 'email', e.target.value)} />
              </Col>
            </Form.Group>

          </div>
        ))}
        <div className="PassengerForm input-group mb-3 row">
          <Form.Label className="col-md-2">비밀번호</Form.Label>
          <Col md={10}>
            <Form.Control className="PassengerForm_input"
              type="password"
              value={userPw}
              onChange={handleuserPwChange}
              placeholder="비회원 예매할때 사용할 비밀번호를 입력하세요."
              />
          </Col>
        </div>

            <div className="btn-box mt-5 mb-5">
              <Link href="/" className="btn btn-lg btn-secondary">목록</Link>
              <Button onClick={onSubmit} className="btn btn-lg btn-big btn-primary ms-3">다음</Button>
            </div>
      </div>

      </Form>
    </Container>
  );
};

export default InfoForm;
