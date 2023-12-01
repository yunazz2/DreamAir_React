import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as boards from '../../apis/board'
import BoardRead from '../../components/board/BoardRead'

// ⛄ 게시글 조회
const BoardReadContainer = () => {

  const {boardNo} = useParams()

  const [board, setBoard] = useState({});

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

  useEffect(() => {
    getBoard()
  }, [])  // 의존성 배열을 빈 배열로 지정

  return (
    <>
      <BoardRead boardNo={boardNo}
                 board={board}
      />
    </>
  )
}

export default BoardReadContainer