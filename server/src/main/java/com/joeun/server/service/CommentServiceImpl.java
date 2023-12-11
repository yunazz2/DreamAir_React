package com.joeun.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joeun.server.dto.Comment;
import com.joeun.server.mapper.CommentMapper;

@Service
public class CommentServiceImpl implements CommentService {
    
    @Autowired
    private CommentMapper commentMapper;

    @Override
    public List<Comment> list() throws Exception {
       List<Comment> commentList = commentMapper.list();
       return commentList;
    }

    @Override
    public Comment select(int commentNo) throws Exception {
        Comment comment = commentMapper.select(commentNo);
        return comment;
    }

    @Override
    public int insert(Comment comment) throws Exception {
         int boardNo = comment.getBoardNo();
         comment.setParentTable("board");
         comment.setParentNo(boardNo);
         int result = commentMapper.insert(comment);

        return result;
    }

    @Override
    public int update(Comment comment) throws Exception {
         int boardNo = comment.getBoardNo();
         comment.setParentTable("board");
         comment.setParentNo(boardNo);
        int result = commentMapper.update(comment);
        return result;
    }

    @Override
    public int delete(int commentNo) throws Exception {
        int result = commentMapper.delete(commentNo);
        return result;
    }

    @Override
    public List<Comment> listByBoard(int boardNo) throws Exception  { 
       List<Comment> commentList = commentMapper.listByBoard(boardNo);
       return commentList;
    }
}