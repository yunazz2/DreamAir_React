import React from 'react'

const Reservation = ({updatePrice}) => {

    // const updatePrice() => {
    //     var quantity = document.getElementById('quantity').value;
    //     var totalPrice = pricePerTicket * quantity;
    //     document.getElementById('totalPrice').innerText = totalPrice.toLocaleString() + '원';
    // }

  return (
    <div className="busre_container">
    <h1 className='busre'>주문/결제</h1>
    <table className='busre'>
      <thead className='busre'>
        <tr className='busre'>
          <th className='busre'>상품정보</th>
          <th className='busre'>정상가</th>
          <th className='busre'>할인</th>
          <th className='busre'>할인금액</th>
          <th className='busre'>수량</th>
          <th className='busre'>금액</th>
        </tr>
      </thead>
      <tbody>
        <tr className='busre'>
          <td className='busre'>공항 리무진버스 1회권</td>
          <td className='busre'>15,000원</td>
          <td className='busre'>-</td>
          <td className='busre'>0원</td>
          <td className='busre'>
            <select name="quantity" id="quantity" onChange={updatePrice}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </td>
          <td className="busre_total"><span id="totalPrice">15,000원</span></td>
        </tr>
      </tbody>
    </table>
    <div className="busre_input-group">
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" placeholder="이름 입력" />

      <label htmlFor="contact">연락처:</label>
      <input type="text" id="contact" placeholder="연락처 입력" />

      <label htmlFor="email">이메일:</label>
      <input type="email" id="email" placeholder="이메일 입력" />
    </div>

    <div className="busre_privacy-policy">
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

    <button className="busre_btn">결제하기</button>
  </div>
);
};

export default Reservation