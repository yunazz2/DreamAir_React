import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as comments from '../../apis/comment'
import CommentUpdateForm from '../../components/board/CommentUpdateForm'

const CommentUpdateContainer = () => {

  const {boardNo} = useParams()
  const {commentNo} = useParams()
  const [comment, setComment] = useState({})
  const navigate = useNavigate()

  const onUpdate = async(boardNo, commentNo, content) => {
    try {
        const response = await comments.commentUpdate(boardNo, commentNo, content);
        console.log(response.data);
        alert('수정 완료');

        navigate(`/board/${boardNo}`)
    }
    catch(e) {
        console.log(e);
    }
}

const getComment = async () => {
  try {
    const response = await comments.commentSelect(commentNo);
    const data = response.data
    console.log(data);
    setComment(data)
  }
  catch(e) {
    console.log(e);
  }
}

useEffect(() => {
  getComment(boardNo)
}, [boardNo])

  return (
    <>
    <CommentUpdateForm comment={comment} 
                       boardNo={boardNo} 
                       commentNo={commentNo}
                       onUpdate={onUpdate}
                       />
    </>
  )
}

export default CommentUpdateContainer