package com.joeun.server.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Board;
import com.joeun.server.dto.Users;
import com.joeun.server.service.BoardService;
import com.joeun.server.service.UserService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
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
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Users user) {
        log.info("[POST] - /join - 회원 등록");
        try {
            int result = userService.insert(user);
            if(result > 0) {
                return new ResponseEntity<>("회원 가입 완료", HttpStatus.CREATED);    // 201
            }
            else {
                return new ResponseEntity<>("회원 가입 실패", HttpStatus.OK);
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 로그인
    
}
