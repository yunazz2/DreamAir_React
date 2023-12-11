import React, { useEffect, useState } from 'react'
import * as comments from '../../apis/comment'
import CommentList from '../../components/board/CommentList'
import { useNavigate } from 'react-router-dom'

const CommentListContainer = ({boardNo}) => {

  const navigate = useNavigate();
  
  // const {boardNo} = useState('')
  const [commentList, setCommentList] = useState([])

  const getCommentList = async (boardNo) => {
    const response = await comments.commentList(boardNo);
    const data = await response.data;
    console.log(data);
    setCommentList(data);
  }

  useEffect(() => {
    getCommentList(boardNo);
}, [boardNo])

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

const onDelete = async (commentNo) => {
  try {
    const response = await comments.commentDelete(commentNo);
    console.log(response.data);
    alert('삭제 완료');
    getCommentList();
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
};

  return (
    <>
    <CommentList boardNo={boardNo} commentList={commentList} onDelete={onDelete} onUpdate={onUpdate}/>
    </>
  )
}

export default CommentListContainer