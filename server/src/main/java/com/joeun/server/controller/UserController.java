package com.joeun.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Users;
import com.joeun.server.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

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
        
}
