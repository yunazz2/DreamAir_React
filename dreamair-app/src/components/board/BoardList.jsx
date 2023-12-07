import React from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format'

const BoardList = ({ boardList, isLoading }) => {
  const minHeight = '400px';
  const minImageHeight = '150px';

  return (
    <div>
      <h1 className="my-4 text-center">게시글 목록</h1>
      <Link to="/board/insert" className="btn btn-primary mb-3">글쓰기</Link>

      { isLoading && 
        <div>
            <img src="/img/loading.webp" alt="loading" />
        </div> 
      }
      { !isLoading && boardList && (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {boardList.map((board) => (
          <div className="col mb-4" key={board.boardNo}>
            <div className="card" style={{ minHeight }}>
              {board.thumbnail && (
                <img src={`/file/img/${board.thumbnail.fileNo}`} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover', minHeight: minImageHeight }}/>
                // <img src={`/file/img/${board.thumbnail.fileNo}`} alt="게시글 이미지" className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover', minHeight: minImageHeight }}/>
              )}
              <div className="card-body">
                <h5 className="card-title title"><Link to={`/board/${board.boardNo}`} style={{ color: '#333' }}>{board.title}</Link></h5>
                <hr/>
                    <td align='right'>조회수: {board.views}</td>
                    <hr/>
                    <p className="card-text">작성자: {board.writer}</p>
                    <p className="card-text d-grid">
                        <td>등록일: {format.formatDate(board.regDate)}</td>
                        <td>수정일: {format.formatDate(board.updDate)}</td>
                    </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default BoardList;
