import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './pages/Index';

import BoardInsertContainer from './containers/board/BoardInsertContainer';
import BoardListContainer from './containers/board/BoardListContainer';
import BoardReadContainer from './containers/board/BoardReadContainer';
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
import TicketInfoContainer from './containers/booking/TicketInfoContainer'

import BookingListContainer from './containers/booking/BookingListContainer';
import BookingInfoContainer from './containers/booking/BookingInfoContainer';
import SeatContainer from './containers/booking/SeatContainer';
import SeatRtContainer from './containers/booking/SeatRtContainer'
import NoticeContainer from './containers/booking/NoticeContainer';
import PaymentContainer from './containers/booking/PaymentContainer';
import PaymentCompelteContainer from './containers/booking/PaymentCompelteContainer';

import AdminListContainer from './containers/admin/AdminListContainer';
import UserListContainer from './containers/admin/UserListContainer';
import AdminBookingListContainer from './containers/admin/AdminBookingListContainer';
import TicketListContainer from './containers/admin/TicketListContainer';
import FinalCheckContainer from './containers/admin/FinalCheckContainer';
import QRListContainer from './containers/admin/QRListContainer';
import AdminInsertContainer from './containers/admin/AdminInsertContainer';

import ProductListContainer from './containers/product/ProductListContainer';
import ProductInsertContainer from './containers/product/ProductInsertContainer';
import ProductUpdateContainer from './containers/product/ProductUpdateContainer';

import FlightListContainer from './containers/flight/FlightListContainer';
import FlightInsertContainer from './containers/flight/FlightInsertContainer';
import FlightUpdateContainer from './containers/flight/FlightUpdateContainer';

import IndexContainer from './containers/bus/IndexContainer';
import ReservationContainer from './containers/bus/ReservationContainer';


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
        <Route path="/user/booking/ticketInfo/:ticketNo" element={<TicketInfoContainer/>}/>
      </Routes>

      {/* BOARD */}
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
        <Route path='booking/seat/:pasCount/:roundTrip' element={<SeatContainer />} />
        <Route path='booking/seatRt/:pasCount/:roundTrip' element={<SeatRtContainer />} />
        <Route path='booking/notice' element={<NoticeContainer />} />
        <Route path='booking/payment' element={<PaymentContainer />} />
        <Route path='booking/paymentComplete' element={<PaymentCompelteContainer />} />
      </Routes>


      {/* ADMIN */}
      <Routes>
        <Route path="/admin" element={<AdminListContainer/>}/>
        <Route path="/admin/admin_insert" element={<AdminInsertContainer/>}/>
        <Route path="/admin/user_list" element={<UserListContainer/>}/>
        <Route path="/admin/booking_list" element={<AdminBookingListContainer/>}/>
        <Route path="/admin/ticket_list" element={<TicketListContainer/>}/>
        <Route path="/admin/Final_Check" element={<FinalCheckContainer/>}/>
      </Routes>

      {/* PRODUCT */}
      <Routes>
        <Route path="/product" element={<ProductListContainer/>}/>
        <Route path="/product/product_insert" element={<ProductInsertContainer/>}/>
        <Route path="/product/product_update/:productNo" element={<ProductUpdateContainer/>}/>
      </Routes>

      {/* FLIGHT */}
      <Routes>
        <Route path="/flight" element={<FlightListContainer/>}/>
        <Route path="/flight/flight_insert" element={<FlightInsertContainer/>}/>
        <Route path="/flight/flight_update/:flightNo" element={<FlightUpdateContainer/>}/>
      </Routes>

      {/* BUS */}
      <Routes>
        <Route path="/bus" element={<IndexContainer/>}/>
        <Route path="/bus/reservation" element={<ReservationContainer/>}/>
      </Routes>

      {/* QR */}
      <Routes>
        <Route path="/qr" element={<QRListContainer/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
