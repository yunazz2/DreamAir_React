import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const BoardRead = ({ boardNo, board, fileList, onDownload }) => {

  const handleDownload = (fileNo, fileName) => {
    onDownload(fileNo, fileName)
  }

  useEffect( () => {
    // html-react-parser 라이브러리로, {ReactHtmlParser( boardContent )} 이런 식으로 쓸 수 있으나,
    // 리액트18 버전에서 아직 미지원.
    // if( board ) document.getElementById('content').innerHTML = board.content

    console.log('html parsing...');
  }, [board])

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
              <input type="text" className="form-control" id="regDate" value={format.formatDate( board.regDate )} readOnly />
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
            <label htmlFor="content" className="form-label fw-bold">내용</label>
            {/* <textarea className="form-control" id="content" rows="8" value={board.content} readOnly></textarea> */}
            { board && board.content  && 
                                <CKEditor editor={ ClassicEditor }
                                data={ board.content }
                                disabled={true}
                                config={{
                                  toolbar: [],
                                }}
                                />
                                
                              }
          </div>
          <tr>
                        <td colSpan={2}>파일</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            { fileList.map( (file) => (
                              <div className='file-box' key={file.no}>
                                    <div className="item">
                                        <img src={`/file/img/${file.no}`} alt={file.fileName} />
                                        <span>{file.originName}({ format.byteToUnit(file.fileSize) })</span>
                                    </div>

                                    <div className="item">
                                        <button className="btn" onClick={() => handleDownload(file.no, file.originName)}>다운로드</button>
                                    </div>

                                </div>
                            ))}
                        </td>
                    </tr>
            </div>
        </div>

        <div className="card-footer">
          <div className="d-flex justify-content-end">
            <Link to="/board" className="btn btn-secondary">목록</Link>
            <Link to={`/board/update/${boardNo}`} className="btn btn-primary me-2">수정</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardRead;
