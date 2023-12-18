package com.joeun.server.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Board;
import com.joeun.server.dto.CustomUser;
import com.joeun.server.dto.Users;
import com.joeun.server.service.BoardService;
import com.joeun.server.service.UserService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
@RestController
@RequestMapping("/")
public class HomeController {
    
    @Autowired
    private UserService userService;

    @Autowired
    private BoardService boardService;

    // 메인 화면
    @GetMapping("mainList")
    public ResponseEntity<?> home(Principal principal) {
        // String loginId = principal != null ? principal.getName() : "guest";
        // String loginId = principal.getName();
        log.info("homeGET");

        try {
            // 최근 게시글 목록
            List<Board> boardMainList = boardService.mainList();  // 수정된 부분
            
            if(boardMainList == null) {
                log.info("조회된 게시글 없음");
            }
            else {
                log.info("최근 게시글 개수 : " + boardMainList.size());
                for (Board board : boardMainList) {
                    log.info("게시글 정보 : " + board);
                }
            }

            return new ResponseEntity<>(boardMainList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원 가입
    @PostMapping("user")
    public ResponseEntity<?> join(@RequestBody Users user) throws Exception {

        log.info("[POST] - /users");

        int result = userService.insert(user);

        if( result > 0 ) {
            log.info("회원가입 성공! - SUCCESS");
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }
        else {
            log.info("회원가입 실패! - FAIL");
            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        } 
    }

    // 사용자 정보 조회
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
}
