import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format'
import CommentUpdateForm from './CommentUpdateForm'

const CommentList = ({ boardNo, commentList, onDelete, onUpdate, isEdit, onUpateMode }) => {

  

  return (
    
    <div className="commentList-box mt-5">
      <h2>댓글 목록</h2>
      {commentList && commentList.length > 0 ? (
        <ul id="comment-list">
          {commentList.map((comment) => (
            <li key={comment.commentNo} className="mb-2">
              { isEdit ? 
                <>
                  <CommentUpdateForm boardNo={boardNo} comment={comment} onUpdate={onUpdate} onUpateMode={onUpateMode} />
                </>
              :
                <>
                  <strong id={`cmW_${comment.commentNo}`}>작성자 : {comment.writer}</strong>:
                  <span id={`cmC_${comment.commentNo}`}>댓글 : {comment.content}</span>
                  <span id={`cmC_${comment.commentNo}`}>등록일자 : {format.formatDate(comment.regDate)}</span>
                  <span id={`cmC_${comment.commentNo}`}>수정일자 : {format.formatDate(comment.updDate)}</span>
                  <div className="item">
                    <button className='btn btn-primary btn-basic'>
                      <button className="btn btn-primary" onClick={ onUpateMode }>수정</button>
                      {/* <Link to={`/comment/comment_update/${boardNo}/${comment.commentNo}`}>수정</Link> */}
                    </button>
                    <button className='btn btn-danger btn-basic'><Link to="#" className="1" onClick={() => onDelete(boardNo, comment.commentNo)}>삭제</Link></button>
                  </div>
                </>
              }
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
