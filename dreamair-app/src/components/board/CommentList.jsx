import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format'
import CommentUpdateForm from './CommentUpdateForm'

const CommentList = ({ boardNo, commentList, onDelete, onUpdate, isEdit, onUpateMode }) => {

  

  return (
    
    <div className="commentList-box mt-5">
      <h2 className='mt-5'>댓글 목록</h2>
      {commentList && commentList.length > 0 ? (
        <ul id="comment-list">
          {commentList.map((comment) => (
            <li key={comment.commentNo} className="comment_line mb-2">
              { isEdit ? 
                <>
                  <CommentUpdateForm boardNo={boardNo} comment={comment} onUpdate={onUpdate} onUpateMode={onUpateMode} />
                </>
              :
                <>
                <div className="commentForm">
                  <div className="commentItem">
                    <div className='comment' id={`cmW_${comment.commentNo}`}>작성자 : {comment.writer}</div>
                    <div className='comment' id={`cmC_${comment.commentNo}`}>댓글 : {comment.content}</div>
                    <div className='comment' id={`cmC_${comment.commentNo}`}>등록일자 : {format.formatDate(comment.regDate)}</div>
                    <div className='comment' id={`cmC_${comment.commentNo}`}>수정일자 : {format.formatDate(comment.updDate)}</div>
                  </div>
                  <div className="btn-container">
                    <div className="btn-box">
                      <button className="btn btn-primary btn-basic me-1" onClick={ onUpateMode }>수정</button>
                      {/* <Link to={`/comment/comment_update/${boardNo}/${comment.commentNo}`}>수정</Link> */}
                      <button className='btn btn-danger btn-basic'><Link to="#" className="1" onClick={() => onDelete(boardNo, comment.commentNo)}>삭제</Link></button>
                    </div>
                  </div>
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
