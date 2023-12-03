import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Index from './pages/Index';

import BoardInsertContainer from './containers/board/BoardInsertContainer';
import BoardListContainer from './containers/board/BoardListContainer';
import BoardReadContainer from './containers/board/BoardReadContainer';
import BoardUpdateContainer from './containers/board/BoardUpdateContainer';

import UserListContainer from './containers/admin/UserListContainer';
import BookingListContainer from './containers/admin/BookingListContainer';
import TicketListContainer from './containers/admin/TicketListContainer';
import FinalCheckContainer from './containers/admin/FinalCheckContainer';

import ProductListContainer from './containers/product/ProductListContainer';
import ProductInsertContainer from './containers/product/ProductInsertContainer';
import ProductUpdateContainer from './containers/product/ProductUpdateContainer';

import FlightListContainer from './containers/flight/FlightListContainer';
import FlightInsertContainer from './containers/flight/FlightInsertContainer';
import FlightUpdateContainer from './containers/flight/FlightUpdateContainer';

function App() {
  return (
    <BrowserRouter>
      {/* COMMON */}
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>

      {/* BOARD */}
      <Routes>
        <Route path="/board" element={<BoardListContainer/>}/>
        <Route path="/board/:boardNo" element={<BoardReadContainer/>}/>
        <Route path="/board/insert" element={<BoardInsertContainer/>}/>
        <Route path="/board/update/:boardNo" element={<BoardUpdateContainer/>}/>
      </Routes>

      {/* ADMIN */}
      <Routes>
        <Route path="/admin/user_list" element={<UserListContainer/>}/>
        <Route path="/admin/booking_list" element={<BookingListContainer/>}/>
        <Route path="/admin/ticket_list" element={<TicketListContainer/>}/>
        <Route path="/admin/Final_Check" element={<FinalCheckContainer/>}/>
      </Routes>

      {/* PRODUCT */}
      <Routes>
        <Route path="/product" element={<ProductListContainer/>}/>
        <Route path="/product/insert" element={<ProductInsertContainer/>}/>
        <Route path="/product/update/:productNo" element={<ProductUpdateContainer/>}/>
      </Routes>

      {/* FLIGHT */}
      <Routes>
        <Route path="/flight" element={<FlightListContainer/>}/>
        <Route path="/flight/insert" element={<FlightInsertContainer/>}/>
        <Route path="/flight/update/:flightNo" element={<FlightUpdateContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
