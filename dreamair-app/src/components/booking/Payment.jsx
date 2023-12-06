import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import SelectedFlight from './SelectedFlight';
// import '../../styles/payment.css'

const Payment = () => {

    const handlePayment = () => {
        // 결제 로직을 처리하세요.
        console.log('결제 처리 로직');
    };

    return (
        <Container className="container-pay">
            <h1>주문/결제</h1>
            <Form id="fm">
                {/* 필요한 hidden input 요소들을 추가하세요. */}

                <SelectedFlight />

                <Form.Group controlId="productName">
                <Form.Label>상품명:</Form.Label>
                <Form.Control type="text" name="productName" readOnly />
                </Form.Group>

                <Form.Group controlId="price">
                <Form.Label>결제금액:</Form.Label>
                <Form.Control type="text" name="price" readOnly />
                </Form.Group>

                <Row className="mb-3">
                <Col md={6}>
                    <Form.Label>이름:</Form.Label>
                    <Form.Control type="text" name="name" placeholder="이름 입력" />
                </Col>

                <Col md={6}>
                    <Form.Label>연락처:</Form.Label>
                    <Form.Control type="text" name="tel" placeholder="연락처 입력" />
                </Col>
                </Row>

                <Form.Group controlId="email">
                <Form.Label>이메일:</Form.Label>
                <Form.Control type="email" name="email" placeholder="이메일 입력" />
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
