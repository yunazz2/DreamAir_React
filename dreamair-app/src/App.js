import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import BoardListContainer from './containers/board/BoardListContainer';
import BoardReadContainer from './containers/board/BoardReadContainer';
import BoardInsertContainer from './containers/board/BoardInsertContainer';
import BoardUpdateContainer from './containers/board/BoardUpdateContainer';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/board" element={<BoardListContainer/>}/>
        <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
        <Route path="/board/insert" element={<BoardInsertContainer/>}/>
        <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
