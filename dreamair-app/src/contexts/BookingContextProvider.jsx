import React, { useState } from 'react'

// 결제 완료 이후에 context 해제 해야함
export const BookingContext = React.createContext()
BookingContext.displayName = 'BookingContextName'

const BookingContextProvider = ({children}) => {

    const bookingInfo = {
        // booking 테이블
        bookingNo : 0,
        bookingNo2 : 0,
        name : '',
        names : [],
        seatNo : 0,
        seatNo2 : 0,
        userNo : 0,
        userNos : [],
        userNo2 : 0,
        userNos2 : [],
        productNo : 0,
        routeNo : 0,
        productId : '',
        pasCount : 1,       // 탑승 인원
        roundTrip : '왕복 가는편',      // 왕복 여부
        status : '',
        regDate : '',
        upDate : '',
        ticketType : '',

        // passengers 테이블
        pinType : 0,
        pinTypes : [],
        passengerNo : 0,
        passengerNos : [],
        passengerName : '',
        passengerNames : [],
        firstName : '',
        firstNames : [],
        lastName : '',
        lastNames : [],
        gender : '',
        genders : [],
        birth : '',
        births : [],
        phone : '',
        phones : [],
        email : '',
        emails : [],
        seatNoDep : '',       // 좌석번호(가는편)
        seatNoDepss : [],       // 좌석번호(가는편)
        seatNoDes : '',       // 좌석번호(오는편)
        seatNoDesss : [],       // 좌석번호(오는편)
        productNoDep : 0,       // 상품번호(가는편)
        productNoDeps : [],       // 상품번호(가는편)
        productNoDes : 0,       // 상품번호(오는편)
        productNoDess : [],       // 상품번호(오는편)
        productIdDep : '',
        productIdDeps : [],
        productIdDes : '',
        productIdDess : [],
        userPw : '',
        userPws : [],
        routeNoDep : 0,         // 노선번호(가는편)
        routeNoDeps : [],         // 노선번호(가는편)
        routeNoDes : 0,         // 노선번호(오는편)
        routeNoDess : [],         // 노선번호(오는편)

        // ticket 테이블
        ticketNo : 0,
        departure : '김포',           // 출발지
        destination : '김포',         // 도착지
        boarding :'',            // 탑승시간
        departureTime : '',         // 출발 시간
        destinationTime : '',       // 도착 시간
        departureDate : '',         // 출발 날짜
        destinationDate : '',       // 도착 날짜
        duration : '',            // 소요시간
        checkedIn : 0,
        isBoarded : 0,
        boardingTime : '',          // 실제 탑승시간

        // flight 테이블
        flightNo : 0,
        goFlightNo : 0,
        comeFlightNo : 0,
        flightName : '',
        seatRemaining : 0,

        goPrice : 0,
        comePrice : 0,
        
        // 탑승권 처리 할 때 필요한 변수
        // select : ,

        // 예매 리스트 확인 시 필요한 변수
        userId : '',

        // passengerNoss : ,  // info에서 탑승객 정보 DB 등록된 후에 탑승객 번호 조회
        // seatNoDeps : ,    // 좌석 번호 가는 편
        // seatNoDess : ,    // 좌석 번호 오는 편

        payment : '',     // payment 페이지 구분하는 변수

        // tempBookingNo : ,
    }

    const [booking, setBooking] = useState(bookingInfo)

    return (
        <BookingContext.Provider value={ { booking, setBooking } } >
            {children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider