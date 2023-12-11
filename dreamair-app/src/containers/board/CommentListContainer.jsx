import React, { useEffect, useState } from 'react'
import * as comments from '../../apis/comment'
import CommentList from '../../components/board/CommentList'
import { useNavigate } from 'react-router-dom'

const CommentListContainer = ({boardNo}) => {

  const navigate = useNavigate();
  
  const {commentNo} = useState({})
  const [commentList, setCommentList] = useState([])
  const [isEdit, setEdit] = useState(false)     // 댓글수정 모드 여부

  const onUpateMode = () => {
    setEdit(!isEdit)
  }

  const getCommentList = async (boardNo) => {
    const response = await comments.commentList(boardNo);
    const data = await response.data;
    console.log(data);
    setCommentList(data);
  }

  useEffect(() => {
    getCommentList(boardNo);
 }, [])

const onUpdate = async(boardNo, commentNo, content) => {
  alert('commentNo : ' + commentNo);
  try {
      const response = await comments.commentUpdate(boardNo, commentNo, content);
      console.log(response.data);
      alert('수정 완료');

      getCommentList(boardNo);
      onUpateMode()
      // navigate(`/board/${boardNo}`)
  }
  catch(e) {
      console.log(e);
  }
}

const onDelete = async (boardNo, commentNo) => {
  alert('commentNo : ' + commentNo);
  try {
    const response = await comments.commentDelete(boardNo, commentNo);
    console.log(response.data);
    alert('삭제 완료');
    
    // getCommentList();
    getCommentList(boardNo)
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
};

  return (
    <>
    <CommentList boardNo={boardNo} commentNo={commentNo} commentList={commentList} onDelete={onDelete} onUpdate={onUpdate} isEdit={isEdit} onUpateMode={onUpateMode}/>
    </>
  )
}

export default CommentListContainer