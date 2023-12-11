import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boards from '../../apis/board'
import BoardUpdateForm from '../../components/board/BoardUpdateForm'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'

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
            navigate('/board/{boardNo}')
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
    }, [])

    return (
        <>
            <Header/>
            <div className='container'>
                <BoardUpdateForm boardNo={boardNo} board={board} onUpdate={onUpdate} onDelete={onDelete} />
            </div>
            <Footer/>
        </>
    )
}

export default BoardUpdateContainer