import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BoardUpdateForm = ({boardNo, board, onUpdate, onDelete}) => {

    // ⭐ state 설정
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        onUpdate(boardNo, title, writer, content)
    }

    // 이걸 안 쓰면 기존 내용을 못 불러옴..
    useEffect(() => {
      if(board) {
        setTitle(board.title);
        setWriter(board.writer);
        setContent(board.content);
      }
    }, [board]) // 이 useEffect가 board가 변할 때 계속적으로 호출될 수 있도록
    
    return (
        <div>
            <h1>게시글 수정</h1>
            <h3>번호 : {boardNo}</h3>
            <hr />
            <table border={1}>
              <tbody>
                <tr>
                  <td>번호</td>
                  <td>
                    <input type="text" value={board.boardNo} readOnly/>
                  </td>
                </tr>
                <tr>
                  <td>등록일자</td>
                  <td>
                    <input type="text" value={board.regDate} readOnly/>
                  </td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>
                    <input type="text" value={title} onChange={handleChangeTitle}/>
                  </td>
                </tr>
                <tr>
                  <td>작성자</td>
                  <td>
                    <input type="text" value={writer} onChange={handleChangeWriter}/>
                  </td>
                </tr>
                <tr>
                  <td>내용</td>
                  <td>
                    <textarea cols="40" rows="5" value={content} onChange={handleChangeContent}></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <button onClick={onSubmit}>수정</button>
            <button onClick={() => onDelete(boardNo)}>삭제</button>
            <span></span>
            <Link to="/board">목록</Link>
        </div>
      )
    }

export default BoardUpdateForm