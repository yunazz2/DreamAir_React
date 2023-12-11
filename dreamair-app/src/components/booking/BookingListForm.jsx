import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../contexts/BookingContextProvider';

const BookingListForm = ({ bookingInfo, bookingList }) => {

  const {booking, setBooking} = useContext(BookingContext);

  const handleLinkClick = (bookingItem) => {
    const roundTrip = '왕복'
    const productNoDep = bookingItem.productNo
    const routeNoDep = bookingItem.routeNo
    setBooking({ ...booking, roundTrip, productNoDep, routeNoDep })
  }

  const handleSubmit = (bookingItem) => {

    if(bookingInfo.roundTrip === ('편도')) {
      const productNoDep = bookingItem.productNo
      const routeNoDep = bookingItem.routeNo
      setBooking({ ...booking, productNoDep, routeNoDep})
    } else if(bookingInfo.roundTrip == ('왕복')) {
      const productNoDes = bookingItem.productNo
      const routeNoDes = bookingItem.routeNo
      setBooking({ ...booking, productNoDes, routeNoDes})
    }

  }

  return (
    <div className="container mt-5 py-3">
          {(bookingInfo.roundTrip === '편도' || bookingInfo.roundTrip === '왕복 가는편') && 
            <section>
              <h2 style={{ textAlign: 'center' }}>
                가는편
              </h2>
              <br />
              <h2 style={{ textAlign: 'center' }}>
                <i className="fa fa-solid fa-plane-departure" style={{ color: 'skyblue' }}></i>{' '}
                <span>{bookingInfo.departure} → </span>
                <i className="fa fa-solid fa-plane-arrival" style={{ color: 'skyblue' }}></i>{' '}
                <span>{bookingInfo.destination}</span>
              </h2>
            </section>
          }

          {bookingInfo.roundTrip === '왕복' && 
            <section>
              <h2 style={{ textAlign: 'center' }}>
                오는편
              </h2>
              <br />
              <h2 style={{ textAlign: 'center' }}>
                <i className="fa fa-solid fa-plane-departure" style={{ color: 'skyblue' }}></i>{' '}
                <span>{bookingInfo.destination} → </span>
                <i className="fa fa-solid fa-plane-arrival" style={{ color: 'skyblue' }}></i>{' '}
                <span>{bookingInfo.departure}</span>
              </h2>
            </section>
          }
        

      <form id="fm">
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
              bookingList.map((bookingItem) => (
                <tr key={bookingItem.routeNo}>
                  <td>
                    <i className="fa fa-solid fa-plane fa-2x" style={{ color: 'skyblue' }}></i>
                    <br />
                    <span>{bookingItem.flightName}</span>
                  </td>
                  <td>
                    <span>{bookingItem.departureTime}</span>{' '}
                    <div style={{ display: 'inline-block' }}>
                      <span>{bookingItem.duration}</span> <br /> <img src="/img/arrow.webp" alt="화살표" />
                    </div>{' '}
                    <span>{bookingItem.destinationTime}</span>
                  </td>
                  <td>
                    <img src="/img/logo.png" alt="" width="25" />
                    DreamAir
                  </td>
                  <td>
                    <span>{bookingItem.flightName}</span>
                  </td>
                  <td>
                    <span>{bookingItem.productPrice}</span>
                  </td>
                  <td>
                    <span>{bookingItem.seatRemaining}</span>
                  </td>
                  <td>
                    <a href="" className="btn btn-outline-primary btn-lg">
                      장바구니
                    </a>
                  </td>
                  <td>
                    {bookingInfo.roundTrip === '편도' && (
                      <>
                        <Link to="/booking/notice" onClick={() => handleSubmit(bookingItem)} className="btn btn-outline-primary btn-lg" >
                          예매하기
                        </Link>
                      </>
                    )}

                    {bookingInfo.roundTrip === '왕복 가는편' && (
                      <>
                        <Link to="/booking/bookingList" onClick={() => handleLinkClick(bookingItem)} className="btn btn-outline-primary btn-lg btn-select" >
                          선택하기
                        </Link>
                      </>
                    )}

                    {bookingInfo.roundTrip === '왕복' && (
                      <>
                        <Link to="/booking/notice" onClick={() => handleSubmit(bookingItem)} className="btn btn-outline-primary btn-lg" >
                          예매하기
                        </Link>
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
