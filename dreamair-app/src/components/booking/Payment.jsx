import React, { useContext, useEffect, useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import SelectedFlight from './SelectedFlight';
import { BookingContext } from '../../contexts/BookingContextProvider';
import '../../styles/payment.css'

const Payment = ( {goBookingList, comeBookingList, bookingInsert} ) => {

    const {booking, setBooking} = useContext(BookingContext)
    console.log("payment : " + booking);
    let totalPrice = 0
    if(booking.roundTrip === '왕복') {
        totalPrice = ( booking.goPrice + booking.comePrice ) * booking.pasCount
    } else {
        totalPrice = booking.goPrice * booking.pasCount
    }
    
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [price, setPrice] = useState(totalPrice)
    
    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeTel = (e) => {
        setTel(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePayment = () => {

        console.log("productIdDeps" + booking.productIdDeps);
        console.log("productIdDess" + booking.productIdDess);
        console.log("names" + booking.names);
        console.log("productIdDeps" + booking.productIdDeps);
        console.log("status" + booking.status);

        // 결제 로직을 처리하세요.
        console.log('결제 처리 로직');
        
        // 2️⃣  객체 초기화 하기
        var IMP = window.IMP; 
        // IMP.init("imp67011510"); 
        IMP.init("imp48458232"); 
        
        var today = new Date();   
        var hours = today.getHours(); // 시
        var minutes = today.getMinutes();  // 분
        var seconds = today.getSeconds();  // 초
        var milliseconds = today.getMilliseconds();
        var makeMerchantUid = hours +  minutes + seconds + milliseconds;
        
        IMP.request_pay({
            pg : 'kcp',                                 // PG사
            pay_method : 'card',                        // 결제방식
            merchant_uid: "IMP"+makeMerchantUid,        // 주문번호(상품ID) *
            name : '항공권',                            // 상품명 *
            amount : price,                              // 결제금액 *
            buyer_email : email,                        // 결제자 이메일 
            buyer_name : name,                          // 결제자 이름
            buyer_tel : tel,                            // 결제자 전화번호
        }, function (rsp) { // callback
            if (rsp.success) {
                // 결제 성공
                console.log("결제성공");
                console.log(rsp);
                bookingInsert(booking)

            } else {
                // 결제 실패
                console.log(rsp);
            }
        });

    };

    return (
        <Container className="container-pay mt-3">
            <h1>주문/결제</h1>
            <Form id="fm">
                <SelectedFlight goBookingList={goBookingList} comeBookingList={comeBookingList} />

                <Form.Group className="paymentForm" controlId="productName">
                <Form.Label>상품명:</Form.Label>
                <Form.Control type="text" value='항공권' readOnly />
                </Form.Group>

                <Form.Group className="paymentForm" controlId="price">
                <Form.Label>결제금액:</Form.Label>
                <Form.Control type="text" value={price} readOnly />
                </Form.Group>

                <Row className="mb-3">
                <Col md={6} className="paymentForm">
                    <Form.Label>이름:</Form.Label>
                    <Form.Control className="ms-3" type="text" onChange={handleChangeName} value={name} placeholder="이름 입력" />
                </Col>

                <Col md={6} className="paymentForm">
                    <Form.Label>연락처:</Form.Label>
                    <Form.Control type="text" onChange={handleChangeTel} value={tel} placeholder="연락처 입력" />
                </Col>
                </Row>

                <Form.Group className="paymentForm" controlId="email">
                <Form.Label>이메일:</Form.Label>
                <Form.Control type="email" onChange={handleChangeEmail} value={email} placeholder="이메일 입력" />
                </Form.Group>

                <div className="privacy-policy">
                    <p>본인은 <strong>개인정보 수집 및 이용</strong>에 관한 내용을 충분히 이해하고, 다음과 같은 목적으로 개인정보 수집 및 이용에 동의합니다:</p>
                    <ul>
                        <li>예약 처리 및 서비스 제공</li>
                        <li>고객 문의 대응</li>
                        <li>결제 처리 및 정산</li>
                        <li>마케팅 및 광고에의 활용</li>
                    </ul>
                    <p>수집하는 개인정보 항목은 이름, 연락처, 이메일 등이며, 서비스 제공 목적 이외의 용도로는 사용되지 않습니다. 보유 및 이용 기간은 서비스 제공 종료 후 6개월까지이며, 이후 해당 정보는 지체 없이 파기합니다.</p>
                    <p>동의를 거부할 권리가 있으며, 거부 시에는 서비스 이용에 제한을 받을 수 있습니다.</p>
                </div>

                <Button variant="primary" onClick={handlePayment} className="btn">결제하기</Button>
            </Form>
        </Container>
    );
};

export default Payment;
