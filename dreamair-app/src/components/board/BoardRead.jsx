import React from 'react';
import { Link } from 'react-router-dom';

const BoardRead = ({ boardNo, board }) => {
  return (
    <div className="container my-5">
      <div className="card text-center">
        <div className="card-header">
          <h1 className="display-4 mb-0">게시글 조회</h1>
        </div>
        <div className="card-body">
          <div className="d-md-flex justify-content-center">
            <div className="mb-3 me-md-5">
              <label htmlFor="boardNo" className="form-label fw-bold">번호</label>
              <input type="text" className="form-control" id="boardNo" value={board.boardNo} readOnly />
            </div>

            <div className="mb-3 me-md-5">
              <label htmlFor="regDate" className="form-label fw-bold">등록일자</label>
              <input type="text" className="form-control" id="regDate" value={board.regDate} readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-bold">제목</label>
              <input type="text" className="form-control" id="title" value={board.title} readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="writer" className="form-label fw-bold">작성자</label>
              <input type="text" className="form-control" id="writer" value={board.writer} readOnly />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label fw-bold">내용</label>
            <textarea className="form-control" id="content" rows="8" value={board.content} readOnly></textarea>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-end">
            <Link to={`/board/update/${boardNo}`} className="btn btn-primary me-2">수정</Link>
            <Link to="/board" className="btn btn-secondary">목록</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardRead;
