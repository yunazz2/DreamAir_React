import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BoardInsertForm = ({ onInsert }) => {

  // ⭐ state 설정 => value에 설정할 값들
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeFile = (e) => {
    setFile(e.target.value);
  };

  const onSubmit = () => {
    onInsert(title, writer, content, file);
  };

  return (
    <div>
      <h1 className='my-4 text-center'>게시글 등록</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">제목</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleChangeTitle}/>
        </div>

        <div className="mb-3">
          <label htmlFor="writer" className="form-label">작성자</label>
          <input type="text" className="form-control" id="writer" value={writer} onChange={handleChangeWriter}/>
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">내용</label>
          <textarea className="form-control" id="content" rows="5" value={content} onChange={handleChangeContent}></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">파일</label>
          <input type="file" className="form-control" id="file" onChange={handleChangeFile} multiple />
        </div>

        <div className="mb-3">
          <button className="btn btn-secondary me-2"><Link to="/board">목록</Link></button>
          <button type="button" className="btn btn-primary" onClick={onSubmit}>등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardInsertForm;