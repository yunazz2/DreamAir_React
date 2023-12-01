import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardListContainer from './containers/BoardListContainer';
import BoardReadContainer from './containers/BoardReadContainer';
import BoardInsertContainer from './containers/BoardInsertContainer';
import BoardUpdateContainer from './containers/BoardUpdateContainer';

const booking = () => {
  return (
    <Routes>
        <Route path="/" element={<Index/>}/>

    </Routes>
  )
}

export default booking