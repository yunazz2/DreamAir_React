import React, { useEffect, useState } from 'react'

const CommentUpdateForm = ({boardNo, comment, onUpdate, onUpateMode}) => {

  const [content, setContent] = useState('')
  const [writer, setWriter] = useState('');

  const handleChangeContent = (e) => {
      setContent(e.target.value)
  }

  const onSubmit = () => {
      onUpdate(boardNo, comment.commentNo, content)
  }

  useEffect(() => {
    if (comment) {
      console.log('comment 들어옴....');
      setWriter(comment.writer);
      setContent(comment.content);
    }
    console.log('comment : ' + comment);
    console.log('writer : ' + comment.writer);
    console.log('content : ' + comment.content);
  }, [comment]);

  return (
    <div className="comment_container mt-5">
            <h2>댓글 수정</h2>
            <div className="comment-box d-flex">
                <input type="hidden" name="parentTable" value="comment"/>
                <input type="hidden" name="parentNo" value={boardNo}/>
                <div className="form-group">
                    <label htmlFor="comment-writer">작성자</label>
                    <input type="text" id="comment-writer" name="comment-writer" className="form-control" defaultValue={writer} readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="comment-content">댓글</label>
                    <textarea id="comment-content" name="comment-content" className="form-control" placeholder="댓글을 입력하세요..." defaultValue={content} onChange={handleChangeContent} required></textarea>
                </div>
            </div>
            <div className="btn-box">
              <button className="btn btn-basic btn-primary me-2" onClick={() => onSubmit(boardNo, comment.commentNo, content)}>수정</button>
              <button className="btn btn-basic btn-danger me-2" onClick={ onUpateMode }>취소</button>
            </div>
        </div>
        );
        };

export default CommentUpdateForm