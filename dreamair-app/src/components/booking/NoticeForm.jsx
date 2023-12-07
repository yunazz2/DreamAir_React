import React from 'react';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import SelectedFlight from './SelectedFlight';

const NoticeForm = ( {} ) => {
  return (
    <Container className="mt-5 py-3">
      <h1 style={{ textAlign: 'center' }}>탑승객 유의사항 안내</h1>
      <div className="img_container text-center mt-3">
        <img src="/img/notice_check.png" alt="유의사항 안내" />
      </div>
      <br />
      <h2 className="mt-3">선택한 항공 스케줄</h2>

      <Form action="/booking/payment">
        {/* 입력 필드 (예: hidden)는 Form.Control 컴포넌트를 사용합니다. */}
        {/* <Form.Control type="hidden" name="pasCount" value={bookingInfo.pasCount} />
        <Form.Control type="hidden" name="roundTrip" value={bookingInfo.roundTrip} />
        <Form.Control type="hidden" name="goFlightNo" value={bookingInfo.goFlightNo} />
        <Form.Control type="hidden" name="comeFlightNo" value={bookingInfo.comeFlightNo} /> */}

        <SelectedFlight />

        {/* 취소/환불 안내사항 */}
        <div className="notice_container mt-5" style={{ border: '1px solid rgb(247, 244, 244)' }}>
          <section>
            <h3>• 환불규정</h3>
            <br/>
            <p>* 본 항공권 환불에 따라 발생하는 수수료(위약금)는 아래와 같습니다.</p>

            <p>
                - 출발전 환불(전체 미사용) : 전체요금의 80% <br/>
                - 출발후 환불(부분 사용) : 전체요금의 30% + 편도 정상 판매가<br/> 
                - NoShow 환불(탑승하지 못했을 때) : 환불불가
            </p>

            <br/>
            
            <p>
                ※ 재발행 된 전체 미사용 항공권은 환불 수수료 적용 부분이 상이하므로, 환불 전 반드시 항공사 환불 수수료 확인요망  <br/>
                * 항공사에서 제시한 Penalty 금액이 원화(KRW)가 아닌 경우 변경/환불일의 환율에 따라 변동 될 수 있습니다.
                (금일 환율에 의해서 계산된 결과입니다.)   
            </p>
            <br/>
          </section>

          {/* 비행기 반입 금지 물품 섹션 */}
          <section>
            <h3>• 비행기 반입 금지 물품</h3>
            <br/>
            <h4>1. 가지고 탈수 없는 물품입니다.(객실x수하물x)</h4>
            <p>
                당연하게도 자신을 포함한 승객 모두에게 위험이 될수 있는 폭발물류나 방사성, 독성물질, 인화성 물질(라이터, 성냥도 포함됩니다! 다만 소형안전성냥 및 휴대용라이터는 각1개 한해 객실반입 가능합니다.),기타 위험물질은 반입이 금지됩니다.
                <br/>
                <img src="/img/prohibited1.png" alt="반입금지물품1" />
            </p>
            
            <br/>

            <h4>2. 수하물에 넣어 가지고 갈수 있으나, 기내에는 반입이 불가능합니다(객실x수하물o)</h4>
            <p>
                과도나 커터칼, 다트등의 도검류와 총기류(다만 항공사의 소지허가서를 확인시켜야합니다), 스포츠용품류(배트, 골프채, 빙상스케이트등), 무술호신용품, 공구류(도끼,망치)등은 소지하고 기내에 탑승은 불가능하나, 수하물로 넣어 가져 갈 수 있습니다.
                <br/>
                <img src="/img/prohibited2.png" alt="반입금지물품2"/>          
            </p>
            
            <br/>

            <h4>3. 반입이 가능합니다.(객실o수하물o)</h4> 
            <p>
                수저,포크,손톱깎이등의 생활도구류, 주사바늘 체온계등의 의료장비, 화장품,염색약,욕실용품(100ml이하만 가능/위탁수화물의경우 500ml이하만 가능합니다), 구조용품,휴대용배터리,시계,카메라,노트북 등은 가능합니다.
                <br/>
                <img src="/img/prohibited3.png" alt="반입금지물품3"/>
            </p>

            <br/>

            <h3>• 액체류반입기준</h3>
            <img src="/img/prohibited4.png" alt="반입금지물품4"/>

          </section>

          {/* 확인 체크박스 및 결제 버튼 */}
          <Form.Group className="mt-3">
            <Form.Check
              type="checkbox"
              label="위 내용을 확인하셨습니까?"
              id="commit"
              name="payment"
              value="확인"
              required
            />
          </Form.Group>
          <Button variant="outline-primary" size="lg" type="submit">
            결제하기
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default NoticeForm;
