import React from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format'

const CommentList = ({ commentList, onDelete, onUpdate }) => {
  return (
    <div className="commentList-box mt-5">
      <h2>댓글 목록</h2>
      {commentList && commentList.length > 0 ? (
        <ul id="comment-list">
          {commentList.map((comment) => (
            <li key={comment.commentNo} className="mb-2">
              <strong id={`cmW_${comment.commentNo}`}>작성자 : {comment.writer}</strong>:
              <span id={`cmC_${comment.commentNo}`}>댓글 : {comment.content}</span>
              <span id={`cmC_${comment.commentNo}`}>등록일자 : {format.formatDate(comment.regDate)}</span>
              <span id={`cmC_${comment.commentNo}`}>수정일자 : {format.formatDate(comment.updDate)}</span>
              <div className="item">
                <button className='btn btn-primary btn-basic'><Link to="#" className="1" id={`cmBtnUpd_${comment.commentNo}`} onClick={() => onUpdate(comment.commentNo)}>수정</Link></button>
                <button className='btn btn-danger btn-basic'><Link to="#" className="1" onClick={() => onDelete(comment.commentNo)}>삭제</Link></button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <table>
          <tbody>
            <tr>
              <td align="center">등록된 댓글 정보가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CommentList;
