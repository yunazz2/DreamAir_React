package com.joeun.server.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Admin;
import com.joeun.server.dto.Booking;
import com.joeun.server.dto.Files;
import com.joeun.server.dto.QR;
import com.joeun.server.dto.Users;
import com.joeun.server.service.AdminService;
import com.joeun.server.service.FileService;
import com.joeun.server.service.QRService;
import com.joeun.server.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private UserService userService;

    @Autowired
    private FileService fileService;

    @Autowired
    private QRService qrService;

    // 관리자 목록 조회
    @GetMapping()
    public ResponseEntity<?> admin_getAll() {
        log.info("[GET] - /admin/admin_list - 관리자 목록");
       try {
            List<Admin> adminList = adminService.admin_list();
            if( adminList == null )
                log.info("관리자 목록 없음");
            else 
                log.info("관리자 목록 수 : " + adminList.size());

            return new ResponseEntity<>(adminList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 관리자 등록
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Admin admin) {
        log.info("[POST] - /admin - 관리자 등록");
        try {
            int result = adminService.admin_insert(admin);
            if( result > 0 )
                return new ResponseEntity<>("관리자 등록 완료", HttpStatus.CREATED);  // 201
            else
                return new ResponseEntity<>("관리자 등록 실패", HttpStatus.OK);  

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 관리자 삭제
    @DeleteMapping("/{adminNo}")
    public ResponseEntity<?> destroy(@PathVariable Integer adminNo) {
        log.info("[DELETE] - /admin/" + adminNo + " - 관리자 삭제");
        try {
            int result = adminService.admin_delete(adminNo);
            if( result > 0 )
                return new ResponseEntity<>("관리자 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("관리자 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 사용자 목록 조회
    @GetMapping("/user_list")
    public ResponseEntity<?> user_getAll() {
        log.info("[GET] - /admin/user_list - 사용자 목록");
       try {
            List<Users> userList = adminService.user_list();
            if( userList == null )
                log.info("사용자 목록 없음");
            else 
                log.info("사용자 목록 수 : " + userList.size());

            return new ResponseEntity<>(userList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 사용자 삭제
    @DeleteMapping("/user_list/{userNo}")
    public ResponseEntity<?> user_destroy(@PathVariable Integer userNo) {
        log.info("[DELETE] - /admin/user_list" + userNo + " - 사용자 삭제");
        try {
            int result = adminService.admin_delete(userNo);
            if( result > 0 )
                return new ResponseEntity<>("사용자 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("사용자 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 전체 예매 내역 조회
    @GetMapping("/booking_list")
    public ResponseEntity<?> booking_getAll() {
        log.info("[GET] - /admin/booking_list - 전체 예매 목록");
       try {
            List<Booking> bookingList = adminService.booking_list();
            if( bookingList == null )
                log.info("예매 목록 없음");
            else 
                log.info("예매 목록 수 : " + bookingList.size());

            return new ResponseEntity<>(bookingList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 전체 탑승권 목록 조회
    @GetMapping("/ticket_list")
    public ResponseEntity<?> ticket_getAll() {
        log.info("[GET] - /admin/ticket_list - 전체 탑승권 목록");
        
        Date now = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
        String today = format.format(now);
        log.info("today : " + today);
        
        Booking ticket = new Booking();
        ticket.setDepartureDate(today);

        int select = ticket.getSelect();
        int checkedIn = ticket.getCheckedIn();
        int isBoarded = ticket.getIsBoarded();
        int flightNo = ticket.getFlightNo();

       try {

            switch (select) {
                case 1: checkedIn = 1; isBoarded = 0; break;
                case 2: checkedIn = 1; isBoarded = 1; break;
            }
            
            List<Booking> ticketList = null;

            if(select==0){
                if(flightNo==0){
                    ticketList = adminService.ticket_list(today);
                } else {
                    ticketList = adminService.ticket_selectList_w(today, flightNo);
                }
            } else{
                log.info("검색....");
                ticketList = adminService.ticket_selectList(today, flightNo, checkedIn, isBoarded);
            }

            List<Booking> bookingList = adminService.booking_list();
            if( bookingList == null )
                log.info("예매 목록 없음");
            else 
                log.info("예매 목록 수 : " + bookingList.size());

            return new ResponseEntity<>(bookingList, HttpStatus.OK);
            } catch (Exception e) {
                log.error(null, e);
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }

    // 탑승권 화면 - 탑승 최종 확인 위한
    @GetMapping("Final_check/{ticketNo}")
    public ResponseEntity<?> getOne(@PathVariable Integer ticketNo) {
        log.info("[GET] - /admin/Final_check");  
        try {
            List<Booking> pasTicketList = adminService.pas_ticketList(ticketNo);
            if( pasTicketList == null )
                log.info("탑승권 목록 없음");
            else
                log.info("탑승권 수 : " + pasTicketList.size());

                Files files = new Files();
                files.setParentTable("booking");
                files.setParentNo(ticketNo);
                List<Files> fileList = fileService.listByParent(files);

                QR qr = new QR();
                qr.setParentTable("booking");
                qr.setParentNo(ticketNo);
                List<QR> qrList = qrService.listByParent(qr);

                Map<String, Object> result = new HashMap<String,Object>();
                result.put("qrList", qrList);
                result.put("fileList", fileList);
                result.put("pasTicketList", pasTicketList);

            return new ResponseEntity<>(result, HttpStatus.OK);
            
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    // @GetMapping(value="/Final_check")
    // public String ticket_Checking(Model model, Booking ticket, Files files, QR qr) throws Exception{
    //     log.info("[GET] - /admin/Final_check");       

    //     int ticketNo = ticket.getTicketNo();
    //     // ticketNo로 탑승권 조회
    //     List<Booking> pasTicketList = adminService.pas_ticketList(ticketNo);
        
        // files.setParentTable("booking");
        // files.setParentNo(ticketNo);
        // List<Files> fileList = fileService.listByParent(files);

        // qr.setParentTable("booking");
        // qr.setParentNo(ticketNo);
        // List<QR> qrList = qrService.listByParent(qr);

    //     model.addAttribute("pasTicketList", pasTicketList);
    //     model.addAttribute("fileList", fileList);
    //     model.addAttribute("qrList", qrList);
        
    //     return "admin/Final_check";
    // }

    // // 탑승권 처리 - 탑승 최종 확인 위한
    // @PostMapping(value="/Final_check")
    // public String ticket_CheckingPro(Model model, Booking ticket) throws Exception{
    //     log.info("[POST] - /admin/Final_check");       

    //     // ticketNo에 해당하는 정보 조회
    //     int ticketNo = ticket.getTicketNo();

    //     // adminService.ticket_update(ticketNo);
    //     // 버튼을 클릭 하면, '탑승 완료'로 처리
    //     int isBoarded = 1;
    //     ticket.setIsBoarded(isBoarded);
    //     int result = adminService.ticket_update_b(ticketNo);
    //     if(result > 0 ){
    //         log.info("탑승 완료 DB 처리");
    //     }
    //     // 탑승처리가 완료되면 QR 코드 삭제

    //     return "redirect:/admin/ticket_list";
    // }


}