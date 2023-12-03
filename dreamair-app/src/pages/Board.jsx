import React from 'react'
import BoardList from '../components/board/BoardList'
import BoardListContainer from '../containers/board/BoardListContainer'
import BoardReadContainer from '../containers/board/BoardReadContainer'
import BoardUpdateContainer from '../containers/board/BoardUpdateContainer'
import BoardInsertContainer from '../containers/board/BoardInsertContainer'

const Board = () => {
  return (
    <>
      <BoardListContainer/>
      <BoardReadContainer />
      <BoardUpdateContainer />
      <BoardInsertContainer />
    </>
  )
}

export default Board