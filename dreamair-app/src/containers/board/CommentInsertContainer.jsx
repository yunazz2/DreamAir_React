import React, { useState } from 'react'
import CommentInsertForm from '../../components/board/CommentInsertForm'
import { useNavigate } from 'react-router-dom'
import * as comments from '../../apis/comment'

const CommentInsertContainer = () => {
    
    const { boardNo } = useState({})
    const { comment } = useState({})
    const navigate = useNavigate()

    const onInsert = async (boardNo, comment) => {
      try{
        const response = await comments.commentInsert(boardNo, comment)
        alert('등록 완료')
        console.log(response.data);
  
        navigate(`/board/${boardNo}`)
      } catch(e) {
        console.log(e);
      }
    }
    
  return (
    <>
    <CommentInsertForm boardNo={boardNo} onInsert={onInsert}/>
    </>
  )
}

export default CommentInsertContainer