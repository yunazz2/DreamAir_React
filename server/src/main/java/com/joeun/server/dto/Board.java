package com.joeun.server.dto;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Board { 

    private int boardNo; 
    private String writer;
    private String title;
    private String content;
    private Date regDate;
    private Date updDate;
    private Date date;
    private int views;
    private int userNo;
    private int adminNo;
    private int like;
    private Files thumbnail;
    private String fileName;
    private String fileType;

    // ✅ 파일
    private List<MultipartFile> files;

    // ❌ 삭제할 파일 번호 목록
    private List<Integer> deleteFileNoList;


}
