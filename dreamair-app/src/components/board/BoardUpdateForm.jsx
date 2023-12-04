import React from 'react'
import { Link } from 'react-router-dom';

const BoardUpdateForm = ({ board, fileList }) => {
    const moveList = () => {
      // 목록으로 이동하는 로직 구현
    };
  
    const moveUpdate = () => {
      // 수정 페이지로 이동하는 로직 구현
    };
  
    const actionDelete = () => {
      // 삭제 로직 구현
    };
  
    return (
      <div>
        <h1 className="mb-4">게시글 조회</h1>
          <input type="hidden" name="boardNo" value={board.boardNo} />
          <table className="table table-bordered">
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={board.title} className="form-control" /></td>
            </tr>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" value={board.writer} className="form-control" /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea name="content" cols="40" rows="5" value={board.content} className="form-control"></textarea>
              </td>
            </tr>
            <tr>
              <td>파일</td>
              <td>
                <ul>
                  {fileList.map((file) => (
                    <li key={file.fileNo}>
                      <img id="imgId" src={`/img/${file.fileName}`} alt="첨부이미지" style={{ width: '400px', height: 'auto' }} th:if={`${file.filePath != null} and ${file.fileType == 'img'}`}/>
                      <br />
                      <Link to={`/file/${file.fileNo}`}>{file.originName}</Link>
                      <button type="button" className="btn btn-danger btn-sm btn-file-delete" data-fileNo={file.fileNo}>삭제</button>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>
          <div>
            <button type="button" onClick={moveList} className="btn btn-primary">목록</button>
            <button type="button" onClick={moveUpdate} className="btn btn-primary">수정</button>
            <button type="button" onClick={actionDelete} className="btn btn-primary">삭제</button>
          </div>
      </div>
    );
  };

export default BoardUpdateForm