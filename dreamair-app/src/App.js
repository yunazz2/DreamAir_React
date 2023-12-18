import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import IndexContainer from './containers/IndexContainer';

import BoardInsertContainer from './containers/board/BoardInsertContainer';
import BoardListContainer from './containers/board/BoardListContainer';
import BoardReadContainer from './containers/board/BoardReadContainer';
import BoardUpdateContainer from './containers/board/BoardUpdateContainer';

import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import CheckInContainer from './containers/user/CheckInContainer';
import DeleteAccountContainer from './containers/user/DeleteAccountContainer';
import LogoutContainer from './containers/user/LogoutContainer';
import MileageContainer from './containers/user/MileageContainer';
import MyBookingContainer from './containers/user/MyBookingContainer';
import MyPageContainer from './containers/user/MyPageContainer';
import UserUpdateContainer from './containers/user/UserUpdateContainer';

import BookingInfoContainer from './containers/booking/BookingInfoContainer';
import BookingListContainer from './containers/booking/BookingListContainer';
import NoticeContainer from './containers/booking/NoticeContainer';
import PaymentCompelteContainer from './containers/booking/PaymentCompelteContainer';
import PaymentContainer from './containers/booking/PaymentContainer';
import SeatContainer from './containers/booking/SeatContainer';
import SeatRtContainer from './containers/booking/SeatRtContainer';
import TicketInfoContainer from './containers/booking/TicketInfoContainer';

import AdminBookingListContainer from './containers/admin/AdminBookingListContainer';
import AdminInsertContainer from './containers/admin/AdminInsertContainer';
import AdminListContainer from './containers/admin/AdminListContainer';
import FinalCheckContainer from './containers/admin/FinalCheckContainer';
import QRListContainer from './containers/admin/QRListContainer';
import TicketListContainer from './containers/admin/TicketListContainer';
import UserListContainer from './containers/admin/UserListContainer';

import ProductInsertContainer from './containers/product/ProductInsertContainer';
import ProductListContainer from './containers/product/ProductListContainer';
import ProductUpdateContainer from './containers/product/ProductUpdateContainer';

import FlightInsertContainer from './containers/flight/FlightInsertContainer';
import FlightListContainer from './containers/flight/FlightListContainer';
import FlightUpdateContainer from './containers/flight/FlightUpdateContainer';

import FinalCheckCompleteContainer from './containers/admin/FinalCheckCompleteContainer';
import CommentInsertContainer from './containers/board/CommentInsertContainer';
import CommentListContainer from './containers/board/CommentListContainer';
import CommentUpdateContainer from './containers/board/CommentUpdateContainer';
import ReservationContainer from './containers/bus/ReservationContainer';
import ProductFlightListContainer from './containers/user/ProductFlightListContainer';
import BookingContextProvider from './contexts/BookingContextProvider';

import BusIndexContainer from './containers/bus/BusIndexContainer';
import NotFound from './pages/error/NotFound';
import ServerError from './pages/error/ServerError';
import Test from './pages/error/Test';

import LoginContextProvider from './contexts/LoginContextProvider';


function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        {/* index */}
        <Routes>
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
          <Route path="/user/productFlightList" element={<ProductFlightListContainer/>}/>
        </Routes>

        {/* BOARD */}
        <Routes>
          <Route path="/board" element={<BoardListContainer/>}/>
          <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
          <Route path="/board/insert" element={<BoardInsertContainer/>}/>
          <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
        </Routes>

        {/* COMMENT */}
        <Routes>
          <Route path="/comment/:boardNo" element={<CommentListContainer/>}/>
          <Route path="/comment/comment_insert/:boardNo" element={<CommentInsertContainer/>}/>
          <Route path="/comment/comment_update/:boardNo/:commentNo" element={<CommentUpdateContainer/>}/>
        </Routes>

        {/* booking */}
        <BookingContextProvider>
          <Routes>
            <Route path="/" element={<IndexContainer/>}/>
            <Route path='booking/bookingList' element={<BookingListContainer />} />
            <Route path='booking/info' element={<BookingInfoContainer />} />
            <Route path='booking/seat' element={<SeatContainer />} />
            <Route path='booking/seatRt' element={<SeatRtContainer />} />
            <Route path='booking/notice' element={<NoticeContainer />} />
            <Route path='booking/payment' element={<PaymentContainer />} />
            <Route path='booking/payment_complete' element={<PaymentCompelteContainer />} />
          </Routes>
        </BookingContextProvider>


        {/* ADMIN */}
        <Routes>
          <Route path="/admin" element={<AdminListContainer/>}/>
          <Route path="/admin/admin_insert" element={<AdminInsertContainer/>}/>
          <Route path="/admin/user_list" element={<UserListContainer/>}/>
          <Route path="/admin/booking_list" element={<AdminBookingListContainer/>}/>
          <Route path="/admin/ticket_list" element={<TicketListContainer/>}/>
          <Route path="/admin/Final_Check/:ticketNo" element={<FinalCheckContainer/>}/>
          <Route path="/admin/Final_Check_complete/:ticketNo" element={<FinalCheckCompleteContainer/>}/>
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
          <Route path="/bus" element={<BusIndexContainer/>}/>
          <Route path="/bus/reservation" element={<ReservationContainer/>}/>
        </Routes>

        {/* QR */}
        <Routes>
          <Route path="/qr" element={<QRListContainer/>}/>
        </Routes>


        {/* Error */}
        <Routes>
          <Route path="/error/404" element={ <NotFound /> } />     {/* TODO : 404 페이지 꾸미기 */}
          <Route path="/error/500" element={ <ServerError /> } />  {/* TODO : 500 페이지 꾸미기 */}
          <Route path="/error/test" element={ <Test /> } />        {/* TODO : 500 페이지 꾸미기 */}
          {/* <Route path="/*" element={ <NotFound /> } />             Info : 맨 마지막에 있어야합니다. */}
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>

  );
}

export default App;
