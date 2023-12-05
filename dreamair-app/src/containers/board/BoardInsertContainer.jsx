import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as boards from '../../apis/board'
import BoardInsertForm from '../../components/board/BoardInsertForm'

// 게시글 등록
const BoardInsertContainer = () => {

  const navigate = useNavigate()

  const onInsert = async (title, writer, content) => {
    try {
      const response = await boards.insert(title, writer, content)

      alert('등록 완료')
      console.log(response.data);

      // 👉 게시글 목록 이동
      navigate('/board')
    }
    catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <BoardInsertForm onInsert={onInsert} />
    </>
  )
}

export default BoardInsertContainer