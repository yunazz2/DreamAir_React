package com.joeun.server.service;

import java.util.List;

import com.joeun.server.dto.Board;

public interface BoardService {

    // 게시글 목록
    public List<Board> list() throws Exception;

    // 게시글 이미지 목록
    public List<Board> mainList() throws Exception;
    
    // 게시글 조회
    public Board select(int boardNo) throws Exception;
    
    // 게시글 등록
    public int insert(Board board) throws Exception;
    
    // 게시글 수정
    public int update(Board board) throws Exception;
    
    // 게시글 삭제
    public int remove(int boardNo) throws Exception;
    
    // 조회수 증가
    public int Views(int count, int boardNo) throws Exception;
    
}
 