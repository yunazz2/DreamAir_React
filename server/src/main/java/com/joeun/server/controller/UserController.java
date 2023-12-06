package com.joeun.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Booking;
import com.joeun.server.dto.Users;
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
    public ResponseEntity<?> viewTicket(@PathVariable Integer ticketNo) {
        log.info("[GET] - /user/booking/ticketInfo/" + ticketNo + " - 티켓 상세 조회");
        try {
            List<Booking> viewTicketDetail = bookingservice.selectTicket(ticketNo);

            if(viewTicketDetail == null) {
                return new ResponseEntity<>(viewTicketDetail, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(viewTicketDetail, HttpStatus.OK); // 201
            }

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
