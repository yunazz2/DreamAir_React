package com.joeun.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Comment;
import com.joeun.server.service.CommentService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    // 댓글 목록
    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("[GET] - /comment - 댓글 목록");
        try {
            List<Comment> commentList = commentService.list();

            if(commentList == null) {
                log.info("조회된 댓글 없음");
            }
            else {
                log.info("댓글 수 : " + commentList.size());
            }

            return new ResponseEntity<>(commentList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 댓글 조회
    @GetMapping("/{boardNo}")
    public ResponseEntity<?> getOne(@PathVariable Integer boardNo) {
        log.info("[GET] - /comment/{boardNo}" + boardNo + " - 댓글 등록");
        try {
            List<Comment> commentList = commentService.listByBoard(boardNo);
             if(commentList == null) {
                log.info("조회된 댓글 없음");
            }
            else {
                log.info("댓글 수 : " + commentList.size());

                for (Comment comment : commentList) {
                    log.info("comment : " + comment);
                }
            }
            
            return new ResponseEntity<>(commentList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 댓글 등록
    @PostMapping("/{boardNo}")
    public ResponseEntity<?> create(@RequestBody Comment comment, @PathVariable Integer boardNo) {
        log.info("[POST] - /comment - 댓글 등록");
        try {
            comment.setParentTable("board");
            comment.setBoardNo(boardNo);

            int result = commentService.insert(comment);
            boardNo = comment.getParentNo();
            log.info("댓글 쓰기 처리 후, boardNo : " + boardNo);

            if( result > 0 )
                return new ResponseEntity<>("댓글 등록 완료", HttpStatus.CREATED);  // 201
            else
                return new ResponseEntity<>("댓글 등록 실패", HttpStatus.OK);  

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 댓글 수정
    @PutMapping("/{boardNo}/{commentNo}")
    public ResponseEntity<?> update(@RequestBody Comment comment, @PathVariable Integer boardNo, @PathVariable Integer commentNo) {
        log.info("[PUT] - /comment - 댓글 수정");
        try {
            // comment.setCommentNo(commentNo);
            String updatedContent = comment.getContent();
            comment = commentService.select(commentNo);
            comment.setContent(updatedContent);
            int result = commentService.update(comment);
            log.info("수정 : " + comment);

            if( result > 0 )
                return new ResponseEntity<>("댓글 수정 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("댓글 수정 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 댓글 삭제
    @DeleteMapping("/{boardNo}/{commentNo}")
    public ResponseEntity<?> destroy(@PathVariable Integer commentNo, @PathVariable Integer boardNo) {
        log.info("[DELETE] - /comment/" + commentNo + " - 댓글 삭제");
        try {
            // Comment comment = commentService.select(commentNo);
            // int boardNo = comment.getParentNo();
            // log.info("boardNo (parent_no) 확인 : " + boardNo);
            int result = commentService.delete(commentNo);
            if( result > 0 )
                return new ResponseEntity<>("댓글 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("댓글글 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
