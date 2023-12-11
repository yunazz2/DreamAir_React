import React, { useState } from 'react'

const CommentInsertForm = ({boardNo, onInsert}) => {

    const [writer, setWriter] = useState([])
    const [content, setContent] = useState([])

    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        onInsert(boardNo, writer, content)
    }

  return (
        <div className="comment_container mt-5">
            <h2>댓글 작성</h2>
            <div className="comment-box d-flex">
                <input type="hidden" name="parentTable" value="comment"/>
                <input type="hidden" name="parentNo" value={boardNo}/>
                <div className="form-group">
                    <label htmlFor="comment-writer">작성자</label>
                    <input type="text" id="comment-writer" name="comment-writer" className="form-control" value={writer} placeholder="이름을 입력하세요..." onChange={handleChangeWriter} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="comment-content">댓글</label>
                    <textarea id="comment-content" name="comment-content" className="form-control" placeholder="댓글을 입력하세요..." value={content} onChange={handleChangeContent} required></textarea>
                </div>
            </div>
            <div className="btn-box">
                <button id="btn-comment-insert" className="btn btn-basic btn-primary" onClick={ () => onSubmit(boardNo, writer, content)}>등록</button>
            </div>
        </div>
        );
        };


export default CommentInsertForm