package com.joeun.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Booking;
import com.joeun.server.dto.CustomUser;
import com.joeun.server.dto.Product;
import com.joeun.server.dto.Users;
import com.joeun.server.service.AdminService;
import com.joeun.server.service.BookingService;
import com.joeun.server.service.UserService;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BookingService bookingservice;
    
    @Autowired
    private AdminService adminService;

    /**
     * 사용자 정보 조회
     * @param customUser
     * @return
     */
    @GetMapping("/info")
    public ResponseEntity<?> userInfo(@AuthenticationPrincipal CustomUser customUser) {
        
        log.info("::::: customUser :::::");
        log.info("customUser : "+ customUser);

        Users user = customUser.getUser();
        log.info("user : " + user);

        // 인증된 사용자 정보 
        if( user != null )
            return new ResponseEntity<>(user, HttpStatus.OK);

        // 인증 되지 않음
        return new ResponseEntity<>("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
    }

    // 회원 아이디로 회원 정보 조회
    @GetMapping("/{userId}")
    public ResponseEntity<?> selectById(@PathVariable String userId) {
        log.info("[GET] - /user/{id} - 회원 정보 조회");
        
        try {
            Users user = userService.selectById(userId);
            Users user2 = userService.selectMileage(userId);
            double mileage = user2.getMileage();
            user.setMileage(mileage);

            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("해당 ID의 회원을 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원 정보 수정
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Users user) {
        log.info("[PUT] - /user - 회원 정보 수정");
        try {
            int result = userService.update(user);
            if(result > 0) {
                return new ResponseEntity<>("회원 정보 수정 완료", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("회원 정보 수정 실패", HttpStatus.OK);
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원 탈퇴
    @DeleteMapping("/{userId}")
    public ResponseEntity<?> destroy(@PathVariable String userId) {
        log.info("[DELETE] - /user/ " + userId + " - 회원 정보 삭제");
        try {
            int result = userService.deleteMileage(userId);
            int result2 = userService.deleteUsers(userId);

            return new ResponseEntity<>("회원 정보 삭제 완료", HttpStatus.OK);

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 예매 내역 조회 - 회원
    @GetMapping("/bookingList/{userId}")
    public ResponseEntity<?> selectBookingListByUser(@PathVariable String userId) {
        log.info("[GET] - /user/bookingList/" + userId + "- 회원 예매 내역 조회");
        try {
            List<Booking> bookingList = bookingservice.selectBookingListByUser(userId);

            if(bookingList == null) {
                log.info("예매 내역 없음");
            }
            else {
                log.info("예매 건 수 : " + bookingList.size());
            }
            return new ResponseEntity<>(bookingList, HttpStatus.OK);

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 티켓 상세 조회
    @GetMapping("/booking/ticketInfo/{ticketNo}")
    public ResponseEntity<?> viewTicket(@PathVariable Integer ticketNo, String userId) {
        log.info("[GET] - /user/booking/ticketInfo/" + ticketNo + " - 티켓 상세 조회");
        try {
            List<Booking> viewTicketDetail = bookingservice.selectTicket(ticketNo);
            Users userInfo = userService.selectById(userId);

            Map<String, Object> responseData = new HashMap<>();
            responseData.put("viewTicketDetail", viewTicketDetail);
            responseData.put("userInfo", userInfo);

            return new ResponseEntity<>(responseData, HttpStatus.OK);

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 체크인
    @GetMapping("/checkin")
    public ResponseEntity<?> selectTicketList(@RequestParam Integer ticketNo, @RequestParam String userId) {

        try {
            List<Booking> ticketList = adminService.pas_ticketList(ticketNo);
            log.info(ticketList + "");
            return new ResponseEntity<>(ticketList, HttpStatus.OK);

        } catch (Exception e) {
            System.err.println("Error while processing ticket list: " + e.getMessage());
            return new ResponseEntity<>("Error while processing ticket list", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 체크인 처리
    @PostMapping("/checkin")
    public ResponseEntity<?> checkIn(@RequestBody Map<String, Object> requestData) {
        log.info("들어오니?????");

        try {
            Integer ticketNo = Integer.parseInt((String) requestData.get("ticketNo"));
            
            int changeCheckedIn = 1;

            List<Booking> ticketList = adminService.pas_ticketList(ticketNo);
            
            for (Booking booking : ticketList) {
                booking.setCheckedIn(changeCheckedIn);

                int result = adminService.ticket_update_c(ticketNo, changeCheckedIn);

                if(result > 0) {
                    log.info("DB 변경 완료");
                }
            }
            return new ResponseEntity<>(ticketList, HttpStatus.OK);
    
        } catch (Exception e) {
    
            System.err.println("Error while processing ticket list: " + e.getMessage());
            return new ResponseEntity<>("Error while processing ticket list", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 출도착 항공편 조회
    @GetMapping("/productFlightList")
    public ResponseEntity<?> getAll() {
       log.info("[GET] - /user/productFlightList - 출도착 항공편 조회");
       try {
            List<Product> productFlightList = userService.product_flightList();
            if( productFlightList == null )
                log.info("출도착 항공편 목록 없음");
            else 
                log.info("출도착 항공편 목록 수 : " + productFlightList.size());

            return new ResponseEntity<>(productFlightList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
