import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const BoardRead = ({ boardNo, board, fileList, onDownload }) => {

  const handleDownload = (fileNo, fileName) => {
    onDownload(fileNo, fileName)
  }

  useEffect(() => {
    console.log('html parsing...');
  }, [board])

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <h1 className="display-4 mb-0 text-center">게시글 조회</h1>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="boardNo" className="form-label fw-bold">번호</label>
            <input type="text" className="form-control" id="boardNo" value={board.boardNo} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-bold">제목</label>
            <input type="text" className="form-control" id="title" value={board.title} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="writer" className="form-label fw-bold">작성자</label>
            <input type="text" className="form-control" id="writer" value={board.writer} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="regDate" className="form-label fw-bold">등록일자</label>
            <input type="text" className="form-control" id="regDate" value={format.formatDate(board.regDate)} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label fw-bold">내용</label>
            {board && board.content &&
              <CKEditor
                editor={ClassicEditor}
                data={board.content}
                disabled={true}
                config={{
                  toolbar: [],
                }}
              />
            }
          </div>

          <div className="mb-3">
            <label htmlFor="file" className="form-label fw-bold">파일</label>
            {fileList.map((file) => (
              <div className='file-box' key={file.no}>
                <div className="item">
                  <img src={`/file/img/${file.no}`} alt={file.fileName} className="img-fluid" />
                  <span>{file.originName}({format.byteToUnit(file.fileSize)})</span>
                </div>

                <div className="item">
                  <button className="btn btn-primary" onClick={() => handleDownload(file.no, file.originName)}>다운로드</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <div className="btn-box d-flex">
            <button className="btn btn-basic btn-secondary me-2"><Link to="/board" >목록</Link></button>
            <button className="btn btn-basic btn-primary"><Link to={`/board/update/${boardNo}`}>수정</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardRead;
