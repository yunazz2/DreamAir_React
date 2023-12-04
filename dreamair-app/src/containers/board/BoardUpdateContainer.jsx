import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as boards from '../../apis/board'
import BoardUpdateForm from '../../components/board/BoardUpdateForm'

// ⛄ 게시글 수정
const BoardUpdateContainer = () => {

    const {boardNo} = useParams()

    const [board, setBoard] = useState({})

    const navigate = useNavigate()

    const onUpdate = async(boardNo, title, writer, content) => {
        try {
            const response = await boards.update(boardNo, title, writer, content);
            console.log(response.data);
            alert('수정 완료');

            // 👉 게시글 목록 이동
            navigate('/board')
        }
        catch(e) {
            console.log(e);
        }
    }

    const getBoard = async () => {
        try {
          const response = await boards.select(boardNo);
          const data = response.data
          console.log(data);
          setBoard(data)
        }
        catch(e) {
          console.log(e);
        }
    }

    const onDelete = async (boardNo) => {
        const response = await boards.remove(boardNo);
        console.log(response.data);
        alert('삭제 완료')

        // 👉 게시글 목록 이동
        navigate('/board')
    }
    
    useEffect(() => {
        getBoard()
    }, [])  // 의존성 배열을 빈 배열로 지정

    return (
        <>
            <BoardUpdateForm boardNo={boardNo} board={board} onUpdate={onUpdate} onDelete={onDelete} />
        </>
    )
}

export default BoardUpdateContainer