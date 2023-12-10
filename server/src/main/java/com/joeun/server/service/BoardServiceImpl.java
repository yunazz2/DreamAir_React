package com.joeun.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Board;
import com.joeun.server.dto.Files;
import com.joeun.server.mapper.BoardMapper;
import com.joeun.server.mapper.FileMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Autowired
    private FileMapper fileMapper;
    
    @Autowired
    private FileService fileService;


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

    @Override
    public Board select(int boardNo) throws Exception {
        Board board = boardMapper.select(boardNo);

        // for (int i = 0; i < boardList.size(); i++) {
        //     Files file = new Files();
        //     file.setParentTable("board");
        //     file.setParentNo(boardList.get(i).getBoardNo());

        //     file = fileMapper.selectThumbnail(file);
        //     if(file != null) {
        //         boardList.get(i).setFileName(file.getFileName());
        //         boardList.get(i).setFileType(file.getFileType());
        //     }
        //     boardList.get(i).setThumbnail(file);
        // }
        
        return board;
    }

    @Override
    @Transactional
    public int insert(Board board) throws Exception {
        int result = boardMapper.insert(board);         // 새로 생성된 데이터의 pk 가져옴
        int parentNo = boardMapper.maxPk();
        board.setBoardNo(parentNo);

        // ✅(New) 파일 업로드 
        result += uploadFiles(board);

        return result;
    }

    @Override
    public int update(Board board) throws Exception {
        int result = boardMapper.update(board);

        // 파일 업로드 
        result += uploadFiles(board);

        return result;
    }

    @Override
    public int remove(int boardNo) throws Exception {
        int result = boardMapper.remove(boardNo);
        return result;
    }

    @Override
    public int Views(int count, int boardNo) throws Exception {
        int result = boardMapper.views(count, boardNo);
        return result;
    }


    // ✅(New) 파일 업로드 
    public int uploadFiles(Board board) throws Exception {
        String parentTable = "board";
        int parentNo = board.getBoardNo();
        int result = 0;
        
        List<MultipartFile> fileList = board.getFiles();
        if( fileList != null && !fileList.isEmpty() ) {
            Files fileInfo = new Files();
            fileInfo.setParentTable(parentTable);
            fileInfo.setParentNo(parentNo);
            result = fileService.uploadFiles(fileInfo, fileList);
        }
        return result;
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

}