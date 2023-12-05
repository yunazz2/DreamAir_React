import React from 'react'

const QRList = ({qrNo, qrList, ticketNo}) => {
  return (
    <div className='container'>
    <h1 className="text-center my-5">QR 코드 목록</h1>

    {qrList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
            <thead>
             <tr className="table-primary">
                <th>번호</th>
                <th>QR코드</th>
                <th colSpan="2">비고</th>
             </tr>
            </thead>
            {/* QR 목록 */}
        <tbody>
            {qrList.map((qr) => (
                <tr key={qr.qrNo}>
                    <td>{qr.qrNo}</td>
                    <td><a href={qr.url} target="_blank" style={{ textDecoration: 'none' }}>
                        <img src={`/qr/img?qrNo=${qr.qrNo}`} alt="" /></a>
                    </td>
                    <button className="btn btn-danger" data-qrno={qr.qrNo}>삭제</button>
                </tr>
            ))}
       </tbody>
    </table>
    )}
    </div>
  )}
export default QRList