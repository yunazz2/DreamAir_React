package com.joeun.server.service;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Files;
import com.joeun.server.mapper.FileMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileMapper fileMapper;

    @Value("${upload.path}")            // application.properties 에 설정한 업로드 경로 속성명
    private String uploadPath;          // 업로드 경로

    
    @Override
    public List<Files> list() throws Exception {
        List<Files> fileList = fileMapper.list();
        return fileList;
    }

    @Override
    public Files select(int boardNo) throws Exception {
        Files file = fileMapper.select(boardNo);
        return file;
    }

    @Override
    public int insert(Files board) throws Exception {
        int result = fileMapper.insert(board);
        return result;
    }

    @Override
    public int update(Files board) throws Exception {
        int result = fileMapper.update(board);
        return result;
    }

    @Override
    public int delete(int boardNo) throws Exception {
        int result = fileMapper.delete(boardNo);
        return result;
    }

    @Override
    public List<Files> listByParent(Files file) throws Exception {
        List<Files> fileList = fileMapper.listByParent(file);
        return fileList;
    }

    @Override
    public int deleteByParent(Files file) throws Exception {
        int result = fileMapper.deleteByParent(file);
        return result;
    }

    @Override
    public int download(int fileNo, HttpServletResponse response) throws Exception {
        // result 
        // 0 : 파일 다운로드 처리 실패
        // 1 : 파일 다운로드 성공
        Files file = fileMapper.select(fileNo);

        if( file == null ) {
            // BAD_REQUEST : 400, 클라이언트의 요청이 잘못되었음을 알려주는 상태코드
            // response.setStatus(response.SC_BAD_REQUEST);
            return 0;
        }

        String filePath = file.getFilePath();       // 파일 경로
        String fileName = file.getFileName();       // 파일 이름

        // 다운로드 응답을 위한 헤더 세팅
        // - ContentType            : application/octet-stream
        // - Content-Disposition    : attachment, filename="파일명.확장자"
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

        // 파일 다운로드
        // - 파일 입력
        File downloadFile = new File(filePath);
        FileInputStream fis = new FileInputStream(downloadFile);

        // - 파일 출력
        ServletOutputStream sos = response.getOutputStream();

        // 다운로드
        FileCopyUtils.copy(fis, sos);

        // byte[] buffer = new byte[1024];             // 1024bytes = 1KB 단위 버퍼
        // int data;
        // while( (data = fis.read(buffer)) != -1 ) {  // 1KB 씩 파일입력
        //     sos.write(buffer, 0, data);         // 1KB 씩 파일출력
        // }
        fis.close();
        sos.close();

        return 1;
    }

    @Override
    public List<Files> getFilesByBoardNo(int boardNo) throws Exception {
        return fileMapper.selectFilesByBoardNo(boardNo);
    }

    @Override
    public Files selectThumbnail(Files file) throws Exception {
        return fileMapper.selectThumbnail(file);
    }

    @Override
    public int thumbnail(int fileNo, HttpServletResponse response) throws Exception {
        // 0 : 썸네일 처리 실패
        // 1 : 썸네일 처리 성공
        Files file = fileMapper.select(fileNo);

        if( file == null ) {
            // BAD_REQUEST : 400, 클라이언트의 요청이 잘못되었음을 알려주는 상태코드
            // response.setStatus(response.SC_BAD_REQUEST);
            return 0;
        }

        String filePath = file.getFilePath();       // 파일 경로
        String fileName = file.getFileName();       // 파일 이름
        // 강아지.png

        // 다운로드 응답을 위한 헤더 세팅
        // - ContentType            : 
        // - Content-Disposition    : attachment, filename="파일명.확장자"
        int index = fileName.lastIndexOf(".");
        String ext = fileName.substring(index).toUpperCase();
        log.info("확장자 : " + ext);
        String mediaType = null;
        switch (ext) {
            case "JPG":
            case "JPEG":
                        mediaType = MediaType.IMAGE_JPEG_VALUE;
                        break;
            case "GIF":
                        mediaType = MediaType.IMAGE_GIF_VALUE;
                        break;
            case "PNG":
                        mediaType = MediaType.IMAGE_PNG_VALUE;
                        break;
            
        }

        response.setContentType(mediaType);
        // response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

        // 파일 다운로드
        // - 파일 입력
        File downloadFile = new File(filePath);
        FileInputStream fis = new FileInputStream(downloadFile);

        // - 파일 출력
        ServletOutputStream sos = response.getOutputStream();

        // 다운로드
        FileCopyUtils.copy(fis, sos);

        fis.close();
        sos.close();

        return 1;
    }

    @Override
    public int uploadFiles(Files fileInfo, List<MultipartFile> fileList) throws Exception {
        int result = 0;
        for (MultipartFile file : fileList) {
            result += uploadFile( fileInfo, file );
        }
        log.info(result + "개 파일을 업로드하였습니다.");
        return result;
    }

    @Override
    @Transactional
    public int upload(Files file) throws Exception {
        int result = uploadFile(file, file.getFile());
        if( result > 0 )
            result = fileMapper.maxPk();        
        return result;
    }

		public int uploadFile(Files fileInfo, MultipartFile file) throws Exception {
        int result = 0;
        if( file.isEmpty() ) return result;
            
        // 파일 정보 : 원본파일명, 파일 용량, 파일 데이터 
        String originName = file.getOriginalFilename();
        long fileSize = file.getSize();

        // 업로드 경로
        // 파일명 중복 방지 방법(정책)
        // - 날짜_파일명.확장자
        // - UID_파일명.확장자

        // UID_강아지.png
        String fileName = UUID.randomUUID().toString() + "_" + originName;

        // c:/upload/UID_강아지.png
        String filePath = uploadPath + "/" + fileName;

        // - DB 에 파일 정보 등록
        Files uploadedFile = new Files();
        uploadedFile.setParentTable(fileInfo.getParentTable());
        uploadedFile.setParentNo(fileInfo.getParentNo());
        uploadedFile.setFileName(fileName);
        uploadedFile.setFilePath(filePath);
        uploadedFile.setOriginName(originName);
        uploadedFile.setFileSize(fileSize);
        uploadedFile.setFileCode(0);

        // DB 에 데이터 등록
        result = fileMapper.insert(uploadedFile);

        return result;

    }
    
}
