package com.joeun.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    // 회원 아이디로 회원 정보 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> selectById(@PathVariable String id) { // 수정된 부분
        log.info("[GET] - /user/{id} - 회원 정보 조회");
        try {
            Users user = userService.selectById(id);
            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("해당 ID의 회원을 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            log.error("Error while fetching user by id: {}", id, e); // 수정된 부분
            return new ResponseEntity<>("서버 내부 오류", HttpStatus.INTERNAL_SERVER_ERROR);
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
        
}
