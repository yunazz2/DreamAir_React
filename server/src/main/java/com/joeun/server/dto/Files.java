package com.joeun.server.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Files {

    private int fileNo;
    private String parentTable;
    private int parentNo;
    private String fileName;
    private String originName;
    private String filePath;
    private long fileSize;
    private Date regDate;
    private Date updDate;
    private int fileCode;
    private int boardNo;
    private String fileType;

    MultipartFile file;
}
