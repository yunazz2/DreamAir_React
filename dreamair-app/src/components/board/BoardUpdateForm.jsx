import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format'

const BoardUpdateForm = ({ boardNo, board, onUpdate, onDelete }) => {
  // ⭐ state 설정
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  // 파일 업로드 부분 추가 시 필요한 state
  // const [fileList, setFileList] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    onUpdate(boardNo, title, writer, content);
  };

  useEffect(() => {
    if (board) {
      setTitle(board.title);
      setWriter(board.writer);
      setContent(board.content);
      // 파일 업로드 부분 추가 시 필요한 로직
      // setFileList(board.fileList);
    }
  }, [board]);

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <h1 className="display-4 mb-0 text-center">게시글 수정</h1>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="boardNo" className="form-label fw-bold">번호</label>
            <input type="text" className="form-control" id="boardNo" value={board.boardNo} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="regDate" className="form-label fw-bold">등록일자</label>
            <input type="text" className="form-control" id="regDate" value={format.formatDate(board.regDate)} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-bold">제목</label>
            <input type="text" className="form-control" id="title" value={title} onChange={handleChangeTitle} />
          </div>

          <div className="mb-3">
            <label htmlFor="writer" className="form-label fw-bold">작성자</label>
            <input type="text" className="form-control" id="writer" value={writer} onChange={handleChangeWriter} />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label fw-bold">내용</label>
            <textarea className="form-control" id="content" rows="8" value={content} onChange={handleChangeContent}></textarea>
          </div>

          {/* 파일 업로드 부분 추가 시 필요한 UI 로직 */}
          {/* <div className="mb-3">
            <label htmlFor="file" className="form-label fw-bold">파일</label>
            <ul>
              {fileList.map((file) => (
                <li key={file.fileNo}>
                  <img src={`/img/${file.fileName}`} alt="첨부이미지" style={{ width: '400px', height: 'auto' }} />
                  <br />
                  <Link to={`/file/${file.fileNo}`}>{file.originName}</Link>
                  <button type="button" className="btn btn-danger btn-sm btn-file-delete" data-fileNo={file.fileNo}>삭제</button>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="card-footer btn-triple">
          <div>
            <button className='btn btn-secondary me-2'><Link to="/board">목록</Link></button>
          </div>
          <div className="btn-box">
            <button className="btn btn-basic btn-primary me-2" onClick={onSubmit}>수정</button>
            <button className="btn btn-basic btn-danger me-2" onClick={() => onDelete(boardNo)}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUpdateForm;
