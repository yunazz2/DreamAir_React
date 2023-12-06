import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const InfoForm = ( {booking} ) => {
  const [passengerNames, setPassengerNames] = useState([]);
  const [firstNames, setFirstNames] = useState([]);
  const [lastNames, setLastNames] = useState([]);
  const [genders, setGenders] = useState([]);
  const [births, setBirths] = useState([]);
  const [pinTypes, setPinTypes] = useState([]);
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [maleChecked, setMaleChecked] = useState(true);

  const handleMaleClick = () => {
    setMaleChecked(true);
  };

  const handleFemaleClick = () => {
    setMaleChecked(false);
  };

  const handleChangeNames = (e) => { 
    setPassengerNames(e.target.value)
  }

  const onSubmit = () => {
    console.log();
  }

  // const [passengerData, setPassengerData] = useState(
  //   [...Array(booking.pasCount)].map(() => ({
  //     passengerName : '',
  //     firstName: '',
  //     lastName: '',
  //     gender: '남자', // 초기값 설정
  //     birth: '',
  //     pinType: '1', // 초기값 설정
  //     phone: '',
  //     email: '',
  //   }))
  // );

  // const handleInputChange = (index, fieldName, value) => {
  //   const newPassengerData = [...passengerData];
  //   newPassengerData[index][fieldName] = value;
  //   setPassengerData(newPassengerData);
  // };

  // const handleInputChange = (index, value) => {
  //   const newInputValues = [...passengerNames];
  //   newInputValues[index] = value;
  //   setPassengerNames(newInputValues);
  // };

  return (
    <Container className="mt-5 py-3">
      <h1 style={{ textAlign: 'center' }}>탑승객 정보입력</h1>
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>신분증 정보와 동일하게 입력해주세요.</h3>
      <br />
      <div className="img_container text-center">
        <img src="/img/insert_information.png" alt="정보입력" />
      </div>
      <br /><br />

      <Form>
        {/* {passengerData.map((passenger, i) => (
          <div key={i}> */}
        {[...Array(booking.pasCount)].map((_, i) => (
        <div key={i}>
            <h2>탑승객 {i + 1}</h2>

            <Form.Group className="mb-3 row">
              <Form.Label className="col-md-2">이름</Form.Label>
              <Col md={10}>
                <Form.Control type="text" value={passengerNames} onChange={handleChangeNames} />

                {/* {passengerNames.map((passengerName, index) => (
                  <Form.Control type="text" key={index} value={passengerName} onChange={(e) => handleInputChange(index, e.target.value)} />
                ))} */}
                {/* <Form.Control type="text" value={passenger.passengerName} onChange={(e) => handleInputChange(i, 'passengerName', e.target.value)} /> */}
              </Col>
            </Form.Group>

            <Form.Group className="mb-3 row">
              <Form.Label className="col-md-2">이름(영문)</Form.Label>
              <Col md={10}>
                <Form.Control type="text" name="firstNames" />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3 row">
              <Form.Label className="col-md-2">성(영문)</Form.Label>
              <Col md={10}>
                <Form.Control type="text" name="lastNames" />
              </Col>
            </Form.Group>

            <div className="radio-row" style={{ marginBottom: '20px' }}>
              <Form.Check
                type="checkbox"
                id={`male_${i}`}
                className="male"
                value="남자"
                checked={maleChecked}
                onChange={handleMaleClick}
              />
              <Form.Label htmlFor={`male_${i}`} className="m-r-45">
                남자
              </Form.Label>
              <Form.Check
                type="checkbox"
                id={`female_${i}`}
                className="female"
                value="여자"
                checked={!maleChecked}
                onChange={handleFemaleClick}
              />
              <Form.Label htmlFor={`female_${i}`} className="m-r-45">
                여자
              </Form.Label>
            </div>

            <Form.Group className="mb-3 row">
              <Form.Label className="col-md-2">생년월일</Form.Label>
              <Col md={10}>
                <Form.Control type="text" name="births" />
              </Col>
            </Form.Group>

            <div className="form-floating input-group mb-3 row">
                <Form.Select name="pinTypes" id="floatingSelectGrid" aria-label="Floating label select example">
                    <option value="1">주민등록증</option>
                    <option value="2">여권</option>
                    <option value="3">운전면허증</option>
                </Form.Select>
                <Form.Label htmlFor="floatingSelectGrid">신분증</Form.Label>
            </div>

            <Form.Group className="mb-3 row">
              <Form.Label className="col-md-2">핸드폰 번호</Form.Label>
              <Col md={10}>
                <Form.Control type="text" name="phones" />
              </Col>
            </Form.Group>
            
            <Form.Group className="mb-3 row">
              <Form.Label className="col-md-2">이메일</Form.Label>
              <Col md={10}>
                <Form.Control type="text" name="emails" />
              </Col>
            </Form.Group>

          </div>
        ))}

        <div className="input-group mb-3 row">
          <Form.Label className="col-md-2">비밀번호</Form.Label>
          <Col md={10}>
            <Form.Control
              type="password"
              name="userPw"
              placeholder="비회원 예매할때 사용할 비밀번호를 입력하세요."
            />
          </Col>
        </div>

        <div className="d-flex justify-content-between mt-5 mb-5">
          <a href="/" className="btn btn-lg btn-secondary">
            목록
          </a>
          <Button onClick={onSubmit} className="btn btn-lg btn-primary ms-3">
            다음
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default InfoForm;
