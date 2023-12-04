import logo from './logo.svg';
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

function App() {
  return (
    <BrowserRouter>
    {/* board */}
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/board" element={<BoardListContainer/>}/>
        <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
        <Route path="/board/insert" element={<BoardInsertContainer/>}/>
        <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
      </Routes>
    
    {/* user */}
      <Routes>
        <Route path="/user" element={<MyPageContainer/>}/>
        <Route path="/user/update/:id" element={<UserUpdateContainer/>}/>
        <Route path="/user/checkin" element={<CheckInContainer/>}/>
        <Route path="/user/mileage" element={<MileageContainer/>}/>
        <Route path="/user/deleteaccount" element={<DeleteAccountContainer/>}/>
        <Route path="/user/mybooking" element={<MyBookingContainer/>}/>
        <Route path="/user/logout" element={<LogoutContainer/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
