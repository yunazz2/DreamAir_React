import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
// import BoardListContainer from './containers/board/BoardListContainer';
// import BoardReadContainer from './containers/board/BoardReadContainer';
// import BoardInsertContainer from './containers/board/BoardInsertContainer';
// import BoardUpdateContainer from './containers/board/BoardUpdateContainer';
import BoardList from './pages/board/BoardList'
import BoardRead from './pages/board/BoardRead'
import BoardInsert from './pages/board/BoardInsert'
import BoardUpdate from './pages/board/BoardUpdate'
import BookingList from './pages/booking/BookingList';
// import Board from './pages/Board'

function App() {
  return (
    // <BrowserRouter>
    //     <Routes>
    //     <Route path="/" element={<Index/>}/>
    //     <Route path="/board" element={<BoardListContainer/>}/>
    //     <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
    //     <Route path="/board/insert" element={<BoardInsertContainer/>}/>
    //     <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
    //   </Routes>
    // </BrowserRouter>
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Board/>}/> */}
          <Route path="/" element={<Index/>}/>
          <Route path="/board" element={<BoardList/>}/>
          <Route path="/board/:boardNo" element={<BoardRead/>}/>
          <Route path="/board/insert" element={<BoardInsert/>}/>
          <Route path="/board/update/:boardNo" element={<BoardUpdate/>}/>
        </Routes>
      </BrowserRouter>

      {/* // Booking 라우터 */}
      <BrowserRouter>
        <Routes>
          <Route path='booking/bookingList' element={<BookingList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
