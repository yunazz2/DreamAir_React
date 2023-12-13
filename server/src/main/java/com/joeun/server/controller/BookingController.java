package com.joeun.server.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.joeun.server.dto.Booking;
import com.joeun.server.dto.Users;
import com.joeun.server.service.BookingService;
import com.joeun.server.service.ProductService;
import com.joeun.server.service.UserService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private UserService userService;

    @Autowired
    private BookingService bookingService; 

    @Autowired
    private ProductService productService;

    // 가는 편 항공권 목록 조회
    @GetMapping(value="/goList")
    public ResponseEntity<?> goList(Booking booking) {
        log.info("goList : " + booking);
        try {
            List<Booking> bookingList = bookingService.golist(booking);   

            if(bookingList == null) {
                log.info("조회된 항공권 없음");
            }
            else {
                log.info("조회된 항공권 수 : " + bookingList.size());
            }

            return new ResponseEntity<>(bookingList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    // 오는 편 항공권 목록 조회
    @GetMapping(value="/comeList")
    public ResponseEntity<?> comeList(Booking booking) {
        log.info("comeList : " + booking);
        try {
            List<Booking> bookingList = bookingService.comelist(booking);   

            if(bookingList == null) {
                log.info("조회된 항공권 없음");
            }
            else {
                log.info("조회된 항공권 수 : " + bookingList.size());
            }

            return new ResponseEntity<>(bookingList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    @PostMapping(value="/info")
    public ResponseEntity<?> infoPro(@RequestBody Booking booking , HttpServletRequest request, Principal principal) { 
        log.info("infoPro : " + booking);

        try {
            int result = bookingService.infoPassngers(booking, request, principal);
            if( result > 0 )
                return new ResponseEntity<>("탑승객 정보 등록 완료", HttpStatus.CREATED);  
            else
                return new ResponseEntity<>("탑승객 정보 등록 실패", HttpStatus.OK);  

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    // 가는 편 좌석 선택
    @GetMapping("/seat")
    public ResponseEntity<?> seat(Booking booking) throws Exception {
        
        int productNoDepValue = booking.getProductNoDeps()[0];
        int productNoDesValue = booking.getProductNoDeps()[0];

        String departure = bookingService.selectDeparture(productNoDepValue);
        String destination = bookingService.selectDestination(productNoDesValue);

        // 출발지명과 도착지명으로 노선 조회해서 항공기 번호 부여
        int routeNoToFlightNo = bookingService.selectRouteNo(departure, destination);
        booking.setFlightNo(routeNoToFlightNo);

        booking.setDeparture(departure);
        booking.setDestination(destination);
        booking.setFlightNo(productNoDepValue);
        booking.setGoFlightNo(booking.getFlightNo());
        
        List<Booking> seatStatus = bookingService.selectSeatStatus(routeNoToFlightNo);
        List<String> selectLastPasNoss = bookingService.selectLastPasNos(booking.getPasCount());
        
        booking.setPassengerNoss(selectLastPasNoss);
        
        log.info("가는 편 페이지 부킹 객체 : " + booking);

        // seatStatus와 selectLastPasNos를 Map으로 묶어서 반환
        Map<String, Object> bookingObject = new HashMap<>();
        bookingObject.put("seatStatus", seatStatus);
        bookingObject.put("selectLastPasNos", selectLastPasNoss);
        bookingObject.put("booking", booking);
        
        return new ResponseEntity<>(bookingObject, HttpStatus.OK);
    }

  
    // 예약된 좌석 데이터 가져오기
    @GetMapping("/seatStatus/{flightNo}")
    public ResponseEntity<?> bookedSeatList(@PathVariable Integer flightNo) throws Exception {

        List<Booking> bookedSeatList = bookingService.bookedSeatStatus(flightNo);

        return new ResponseEntity<>(bookedSeatList, HttpStatus.OK);
    }
    
    // 오는 편 좌석 선택
    @GetMapping(value="/seat_rt")
    public ResponseEntity<?> seatRt(Booking booking) throws Exception {

        String departure = booking.getDeparture();
        String destination = booking.getDestination();

        int routeNoToFlightNo = bookingService.selectRouteNo(departure, destination);

        booking.setFlightNo(routeNoToFlightNo);
        booking.setComeFlightNo(booking.getFlightNo());

        List<Booking> seatStatus = bookingService.selectSeatStatus(routeNoToFlightNo);

        log.info("오는 편 페이지 부킹 객체 : " + booking);

        Map<String, Object> bookingObject = new HashMap<>();
        bookingObject.put("seatStatus", seatStatus);
        bookingObject.put("booking", booking);

        return new ResponseEntity<>(bookingObject, HttpStatus.OK);
    }

    // 탑승객 유의사항
    @GetMapping(value="/notice")
    public ResponseEntity<?> notice(Booking booking, Principal principal, HttpServletRequest request) {
            log.info("탑승객 수 : " + booking.getPasCount());
            log.info("왕복 : " + booking.getRoundTrip());
            log.info("noticeGET 페이지 부킹 객체 : " + booking);

            try {
                List<Booking> goBookingList = new ArrayList<Booking>();
                List<Booking> comeBookingList = new ArrayList<Booking>();
                
                // 회원 : userNo 추출, 비회원 : userNo2 추출
                Users user = userService.selectById2(principal, request);
                if ( principal == null ) {
                    log.info("비회원 유저번호 : " + user.getUserNo2());
                } else {
                    log.info("회원 유저번호 : " + user.getUserNo());
                }

                if (booking.getRoundTrip().equals("편도")) {
                    // 편도 조회
                    goBookingList = bookingService.goScheduleList(booking);

                    Map<String, Object> response = new HashMap<>();
                    response.put("goBookingList", goBookingList);
                    response.put("user", user);

                    return new ResponseEntity<>(response, HttpStatus.OK);
                } else {
                    // 왕복 조회
                    goBookingList = bookingService.goScheduleList(booking);
                    comeBookingList = bookingService.comeScheduleList(booking);
                    
                    Map<String, Object> response = new HashMap<>();
                    response.put("goBookingList", goBookingList);
                    response.put("comeBookingList", comeBookingList);
                    response.put("user", user);
                    
                    return new ResponseEntity<>(response, HttpStatus.OK);
                }
                
            } catch (Exception e) {
                log.error(null, e);
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

    }


    // 결제
    @GetMapping(value="/payment")
    public ResponseEntity<?> payment(Booking booking) {
        log.info("페이먼트 booking : " + booking);

        try {
            List<Booking> goBookingList = new ArrayList<Booking>();
            List<Booking> comeBookingList = new ArrayList<Booking>();
            
            if (booking.getRoundTrip().equals("편도")) {
                // 편도 조회
                goBookingList = bookingService.goScheduleList(booking);

                return new ResponseEntity<>(goBookingList, HttpStatus.OK);
            } else {
                // 왕복 조회
                goBookingList = bookingService.goScheduleList(booking);
                comeBookingList = bookingService.comeScheduleList(booking);

                Map<String, Object> response = new HashMap<>();
                response.put("goBookingList", goBookingList);
                response.put("comeBookingList", comeBookingList);
                
                return new ResponseEntity<>(response, HttpStatus.OK);
            }

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
    

    @PostMapping(value = "/bookingInsert")
    public ResponseEntity<?> bookingInsert(@RequestBody Booking booking, Principal principal, RedirectAttributes rttr, HttpServletRequest request) {
        log.info("booking 객체 조회 : " + booking);

        try {
            int result1 = bookingService.bookingInsert(booking, principal, request);
            productService.productOut(booking);
            int bookingNum = 0;
            
            Users user = userService.selectById2(principal, request);
            log.info("user.getUserNo2() : " + user.getUserNo2());
            if( (principal == null) ) {
                bookingNum = bookingService.latest_user2_bookingNo(user.getUserNo2());  
                booking.setBookingNo2(bookingNum);
            } else {
                bookingNum = bookingService.latest_user_bookingNo(user.getUserNo());  
                booking.setBookingNo(bookingNum);
            } 
    
            // // ✅ TODO 티켓 발행 등록 요청
            int result = bookingService.createTicket(booking, principal, request);
    
            // 같은 bookingNo에 대한 ticket 정보 조회
            int bookingNo = booking.getBookingNo();
            List<Booking> ticketList_bookingNo = bookingService.ticketList_bookingNo(bookingNo);   
            
            Map<String, Object> response = new HashMap<>();
            response.put("booking", booking);
            response.put("ticketList_bookingNo", ticketList_bookingNo);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 결제 완료
    @GetMapping(value="/payment_complete")
    public String paymentComplete(Model model, Booking booking) throws Exception {
        log.info("결제완료 booking" + booking);
        
        // int bookingNo = booking.getBookingNo();

        model.addAttribute("booking", booking);


        return "booking/payment_complete";
    }

    // 탑승권 발행
    @GetMapping(value="/ticket")
    public String ticket() {
        return "booking/ticket";
    }

    // 탑승권 상세 페이지
    @PostMapping(value="/ticketInfo")
    public String ticketInfo() {
        return "booking/ticketInfo";
    }





}