package com.joeun.server.service;

import java.io.File;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Board;
import com.joeun.server.dto.Files;
import com.joeun.server.mapper.BoardMapper;
import com.joeun.server.mapper.FileMapper;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Autowired
    private FileMapper fileMapper;

    @Value("${upload.path}")            // application.properties 에 설정한 업로드 경로 속성명
    private String uploadPath;          // 업로드 경로

    // 게시글 목록
    @Override
    public List<Board> list() throws Exception {
        List<Board> boardList = boardMapper.list();

        for (int i = 0; i < boardList.size(); i++) {
            Files file = new Files();
            file.setParentTable("board");
            file.setParentNo(boardList.get(i).getBoardNo());

            file = fileMapper.selectThumbnail(file);
            if(file != null) {
        		boardList.get(i).setFileName(file.getFileName());
        		boardList.get(i).setFileType(file.getFileType());
            }
            boardList.get(i).setThumbnail(file);
        }

        return boardList;
    }

    // 메인 화면 게시글 조회
    @Override
    public List<Board> mainList() throws Exception {
        List<Board> boardMainList = boardMapper.mainList();

        for (int i = 0; i < boardMainList.size(); i++) {
            Files file = new Files();
            file.setParentTable("board");
            file.setParentNo(boardMainList.get(i).getBoardNo());

            file = fileMapper.selectThumbnail(file);
            if(file != null) {
        		boardMainList.get(i).setFileName(file.getFileName());
        		boardMainList.get(i).setFileType(file.getFileType());
            }
            boardMainList.get(i).setThumbnail(file);
        }

        return boardMainList;
    }

    // 게시글 조회
    @Override
    public Board select(int boardNo) throws Exception {
        Board board = boardMapper.select(boardNo);
        return board;
    }

    // 게시글 등록
    @Override
    public int insert(Board board) throws Exception {
        int result = boardMapper.insert(board);
        String parentTable = "board";
        int parentNo = boardMapper.maxPk();

        // 파일 업로드 
        // List<MultipartFile> fileList = board.getFile();

        // if( !fileList.isEmpty() )
        // for (MultipartFile file : fileList) {

        //     if( file.isEmpty() ) continue;

        //     // 파일 정보 : 원본파일명, 파일 용량, 파일 데이터 
        //     String originName = file.getOriginalFilename();
        //     long fileSize = file.getSize();
        //     byte[] fileData = file.getBytes();
            
        //     // UID_강아지.png
        //     String fileName = UUID.randomUUID().toString() + "_" + originName;

        //     // c:/upload/UID_강아지.png
        //     String filePath = uploadPath + "/" + fileName;

        //     // 파일업로드
        //     File uploadFile = new File(uploadPath, fileName);
        //     FileCopyUtils.copy(fileData, uploadFile);       // 파일 업로드

        //     Files uploadedFile = new Files();
        //     uploadedFile.setParentTable(parentTable);
        //     uploadedFile.setParentNo(parentNo);
        //     uploadedFile.setBoardNo(parentNo);
        //     uploadedFile.setFileName(fileName);
        //     uploadedFile.setFilePath(filePath);
        //     uploadedFile.setOriginName(originName);
        //     uploadedFile.setFileSize(fileSize);
        //     uploadedFile.setFileCode(0);

        //     fileMapper.insert(uploadedFile);
        // }

        return result;
    }

    // 게시글 수정
    @Override
    public int update(Board board) throws Exception {
        int result = boardMapper.update(board);
        return result;
    }
    
    // 게시글 삭제
    @Override
    public int remove(int boardNo) throws Exception {
        int result = boardMapper.remove(boardNo);
        return result;
    }

    // 조회수
    @Override
    public void Views(int boardNo) throws Exception {
        boardMapper.views(boardNo);
    }
    
    
}
  