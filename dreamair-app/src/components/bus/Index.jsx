import React from 'react'

const index = () => {
  return (
    <>
      <div className="bus_header">
        <h1>항공 버스 예약 서비스</h1>
      </div>
      <div className="bus_main">
        <h2>편리하고 빠른 여행을 위한 선택</h2>
        <p>국내외 모든 공항으로의 신속한 이동을 위한 항공 버스 예매를 시작하세요.</p>
        <div className="bus_section-container">
          <div className="bus_section"><a href="#timetable">운행 노선 및 시간표</a></div>
          <div className="bus_section"><a href="type.html">항공 버스 예약하기</a></div>
          <div className="bus_section"><a href="#guide">이용 안내</a></div>
          <div className="bus_section"><a href="#about">회사 소개</a></div>
        </div>
      </div>

      <div className="bus_image-section">
        <img src="/resouces/dreamair/static/img/리무진버스 사진.jpg" alt="" />
      </div>

      <div className="bus_main2">
        <div className="bus_ticket-option">
          <div className="bus_ribbon"><span>**인기</span></div>
          <a href="/bus/reservation">
            <img src="/static/img/리무진버스 사진.png" alt="" />
            <div>리무진 1회권</div>
            <div>15,000원</div>
          </a>
        </div>
        <div className="bus_ticket-option">
          <a href="/bus/link-to-next-page">
            <img src="limousine-2.jpg" alt="" />
            <div>리무진 2회권</div>
            <div>28,000원</div>
          </a>
        </div>
        <div className="bus_ticket-option">
          <a href="/bus/link-to-next-page">
            <img src="limousine-family.jpg" alt="" />
            <div>리무진 패밀리권(3~4인)</div>
            <div>40,000원</div>
          </a>
        </div>
      </div>

      {/* 공지사항 모달 시작 */}
      <div id="noticeModal" className="bus_modal">
        <div className="bus_modal-content">
          <span className="bus_close">&times;</span>
          <h2>공지사항</h2>
          <p>가족 3인 이상 타면 1인 무료 !!! <br /> 어린이 동반 시, 어린이 1명 무료 적용 <br /> (어린이 대상 : 만 6~13세)</p>
        </div>
      </div>
    </>
  );
};

export default index