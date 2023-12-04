import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import BoardListContainer from './containers/board/BoardListContainer';
import BoardReadContainer from './containers/board/BoardReadContainer';
import BoardInsertContainer from './containers/board/BoardInsertContainer';
import BoardUpdateContainer from './containers/board/BoardUpdateContainer';
import BookingListContainer from './containers/booking/BookingListContainer';
import BookingInfoContainer from './containers/booking/BookingInfoContainer';
import Notice from './containers/booking/Notice';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
          <Route path="/board" element={<BoardListContainer/>}/>
          <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
          <Route path="/board/insert" element={<BoardInsertContainer/>}/>
          <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
        </Routes>
      </BrowserRouter>

      {/* // Booking 라우터 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path='booking/bookingList' element={<BookingListContainer />} />
          <Route path='booking/info' element={<BookingInfoContainer />} />
          <Route path='booking/notice' element={<Notice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
