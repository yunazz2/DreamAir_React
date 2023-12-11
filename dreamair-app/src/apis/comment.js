import axios from 'axios';

// board 넘버에 대한 댓글
export const commentList = (boardNo) => axios.get(`/comment/${boardNo}`)
// export const commentList = () => axios.get(`/comment/`)

// 댓글 조회
export const commentSelect = (commentNo) => axios.get(`/comment/${commentNo}`)

// 댓글 등록
export const commentInsert = (boardNo, writer, content) => axios.post('/comment', {boardNo, writer, content})

// 댓글 수정
export const commentUpdate = (commentNo, content) => axios.put('/comment', {commentNo, content})

// 댓글 삭제
export const commentDelete = (commentNo) => axios.delete(`/comment/${commentNo}`)