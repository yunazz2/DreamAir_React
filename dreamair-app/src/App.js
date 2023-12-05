import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/Index';
import BoardListContainer from './containers/board/BoardListContainer';
import BoardReadContainer from './containers/board/BoardReadContainer';
import BoardInsertContainer from './containers/board/BoardInsertContainer';
import BoardUpdateContainer from './containers/board/BoardUpdateContainer';
import MyPageContainer from './containers/user/MyPageContainer';
import UserUpdateContainer from './containers/user/UserUpdateContainer';
import CheckInContainer from './containers/user/CheckInContainer';
import MileageContainer from './containers/user/MileageContainer';
import DeleteAccountContainer from './containers/user/DeleteAccountContainer';
import MyBookingContainer from './containers/user/MyBookingContainer';
import LogoutContainer from './containers/user/LogoutContainer';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import BookingListContainer from './containers/booking/BookingListContainer';
import BookingInfoContainer from './containers/booking/BookingInfoContainer';
import Notice from './containers/booking/Notice';

function App() {
  return (
    <BrowserRouter>
      {/* index */}
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/join" element={<JoinContainer/>}/>
        <Route path="/login" element={<LoginContainer/>}/>
      </Routes>
    
      {/* user */}
      <Routes>
        <Route path="/user" element={<MyPageContainer/>}/>
        <Route path="/user/update/:userId" element={<UserUpdateContainer/>}/>
        <Route path="/user/checkin/:userId" element={<CheckInContainer/>}/>
        <Route path="/user/mileage/:userId" element={<MileageContainer/>}/>
        <Route path="/user/deleteaccount/:userId" element={<DeleteAccountContainer/>}/>
        <Route path="/user/mybooking/:userId" element={<MyBookingContainer/>}/>
        <Route path="/user/logout" element={<LogoutContainer/>}/>
      </Routes>

      {/* board */}
      <Routes>
        <Route path="/board" element={<BoardListContainer/>}/>
        <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
        <Route path="/board/insert" element={<BoardInsertContainer/>}/>
        <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
      </Routes>

      {/* booking */}
      <Routes>
        <Route path='booking/bookingList' element={<BookingListContainer />} />
        <Route path='booking/info' element={<BookingInfoContainer />} />
        <Route path='booking/notice' element={<Notice />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
