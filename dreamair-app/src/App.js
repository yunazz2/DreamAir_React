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
import Join from './containers/Join';
import Login from './containers/Login';

function App() {
  return (
    <BrowserRouter>
      {/* index */}
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login/>}/>
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


    </BrowserRouter>

  );
}

export default App;
