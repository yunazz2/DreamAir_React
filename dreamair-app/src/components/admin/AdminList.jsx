import React from 'react';
import { Link } from 'react-router-dom';

const AdminList = ( {adminList, onDelete} ) => {

  return (
    <div className='container'>
        <h1 className="text-center my-5">관리자 관리</h1>
        <div className="btn-box d-grid gap-2">
            <button className="btn btn-outline-primary btn-lg"><Link to="/admin/admin_insert">관리자 등록</Link></button>
        </div>
        <br />
    {adminList != null && (
        <table className="table table-striped table-hover table-bordered text-center align-middle">
            <thead>
             <tr className="table-primary">
                <th align='center'>순번</th>
                <th align='center'>관리자 ID</th>
                <th align='center'>관리자 PW</th>
                <th align='center'>비고</th>
             </tr>
            </thead>
        <tbody>

        {adminList.map((admin) => (
        <tr key={admin.adminNo}>
            <td align='center'>{admin.adminNo}</td>
            <td align='center'>{admin.adminId}</td>
            <td align='center'>{admin.adminPw}</td>
            <td align='center'><button className='btn btn-danger' onClick={ () => onDelete(admin.adminNo) }>삭제</button></td>
        </tr>
        ))}
    </tbody>
    </table>
)}

    {adminList == null && (
        <table>
        <tbody>
        {adminList.isEmpty() && (
            <tr>
                <td colSpan="6">등록된 관리자 정보가 없습니다.</td>
            </tr>
            )}
        </tbody>
        </table>
    )}
    </div>
);
};

export default AdminList