import React from 'react';

const BookingListForm = ({ bookingInfo, bookingList }) => {

  return (
    <div className="container mt-5 py-3">
      {/* <h1 style={{ textAlign: 'center' }}>항공권 조회</h1>
      <br />
      <div className="img_container text-center">
        <img src="/img/searchTicket.png" alt="조회" />
      </div>
      <br /> */}
      <section>
        <h2 style={{ textAlign: 'center' }}>
          {bookingInfo.roundTrip === '편도' || bookingInfo.roundTrip === '왕복 가는편' ? '가는편' : '오는편'}
        </h2>
        <br />
        <h2 style={{ textAlign: 'center' }}>
          <i className="fa fa-solid fa-plane-departure" style={{ color: 'skyblue' }}></i>{' '}
          <span>{bookingInfo.departure} → </span>
          <i className="fa fa-solid fa-plane-arrival" style={{ color: 'skyblue' }}></i>{' '}
          <span>{bookingInfo.destination}</span>
        </h2>
      </section>

      <form action="/booking/info" id="fm" method="get">
        <table className="table table-striped table-hover table-bordered text-center align-middle mt-5">
          <thead>
            <tr className="table-primary">
              <th>편명</th>
              <th>운항시간</th>
              <th>항공사</th>
              <th>편명</th>
              <th>가격</th>
              <th>잔여좌석</th>
              <th>장바구니</th>
              <th>예매하기</th>
            </tr>
          </thead>

          <tbody>
            {bookingList && bookingList.length === 0 && (
              <tr>
                <td colSpan="8">조회된 항공권이 없습니다.</td>
              </tr>
            )}

            {bookingList &&
              bookingList.map((booking) => (
                <tr key={booking.routeNo}>
                  <td>
                    <i className="fa fa-solid fa-plane fa-2x" style={{ color: 'skyblue' }}></i>
                    <br />
                    <span>{booking.flightName}</span>
                  </td>
                  <td>
                    <span>{booking.departureTime}</span>{' '}
                    <div style={{ display: 'inline-block' }}>
                      <span>{booking.duration}</span> <br /> <img src="/img/arrow.webp" alt="화살표" />
                    </div>{' '}
                    <span>{booking.destinationTime}</span>
                  </td>
                  <td>
                    <img src="/img/logo.png" alt="" width="25" />
                    DreamAir
                  </td>
                  <td>
                    <span>{booking.flightName}</span>
                  </td>
                  <td>
                    <span>{booking.productPrice}</span>
                  </td>
                  <td>
                    <span>{booking.seatRemaining}</span>
                  </td>
                  <td>
                    <a href="" className="btn btn-outline-primary btn-lg">
                      장바구니
                    </a>
                  </td>
                  <td>
                    {bookingInfo.roundTrip === '편도' && (
                      <>
                        <input type="hidden" name="productNoDep" value={booking.productNo} />
                        <input type="hidden" name="routeNoDep" value={booking.routeNo} />
                        <input type="submit" value="예매하기" className="btn btn-outline-primary btn-lg" />
                      </>
                    )}

                    {bookingInfo.roundTrip === '왕복 가는편' && (
                      <>
                        <input type="hidden" name="productNoDep" value={booking.productNo} />
                        <input type="hidden" name="routeNoDep" value={booking.routeNo} />
                        <a href="javascript:;" className="btn btn-outline-primary btn-lg btn-select">
                          선택하기
                        </a>
                      </>
                    )}

                    {bookingInfo.roundTrip === '왕복' && (
                      <>
                        <input type="hidden" name="productNoDes" value={booking.productNo} />
                        <input type="hidden" name="routeNoDes" value={booking.routeNo} />
                        <input type="submit" value="예매하기" className="btn btn-outline-primary btn-lg" />
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default BookingListForm;
