import React from 'react';

const FlightList = ({ productFlightList }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center my-3">전체 출도착 항공편 조회</h1>
      <br />

      {productFlightList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>항공편</th>
              <th>출발지</th>
              <th>도착지</th>
              <th>출발일자</th>
              <th>도착일자</th>
              <th>출발시간</th>
              <th>도착시간</th>
              <th>잔여석</th>
              <th colSpan="2">비고</th>
            </tr>
          </thead>
          <tbody>
            {productFlightList.length === 0 ? (
              <tr>
                <td colSpan="10">등록된 항공편이 없습니다.</td>
              </tr>
            ) : (
              productFlightList.map((product) => (
                <tr key={product.flightName}>
                  <td>{product.flightName}</td>
                  <td>{product.departure}</td>
                  <td>{product.destination}</td>
                  <td>{product.departureDate}</td>
                  <td>{product.destinationDate}</td>
                  <td>{product.departureTime}</td>
                  <td>{product.destinationTime}</td>
                  <td>{product.seatRemaining}</td>
                  <td colSpan="2"></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {productFlightList == null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead>
            <tr className="table-primary">
              <th>항공편</th>
              <th>출발지</th>
              <th>도착지</th>
              <th>출발일자</th>
              <th>도착일자</th>
              <th>출발시간</th>
              <th>도착시간</th>
              <th>잔여석</th>
              <th colSpan="2">비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10">등록된 항공편이 없습니다.</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FlightList;
