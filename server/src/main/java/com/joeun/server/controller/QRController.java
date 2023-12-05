package com.joeun.server.controller;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Product;
import com.joeun.server.dto.QR;
import com.joeun.server.service.QRService;
import com.joeun.server.util.MediaUtil;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/qr")
public class QRController {

    @Autowired
    private QRService qrService;

    @GetMapping("/img")
    public ResponseEntity<byte[]> qrImg(int qrNo) throws Exception {
        log.info("[GET] - /file/qr");

        QR qr = qrService.select(qrNo);
        String filePath = qr.getFilePath();

        File f = new File(filePath);
        String ext = filePath.substring( filePath.lastIndexOf(".") );
        
        byte[] bytes = FileCopyUtils.copyToByteArray(f);

        // 이미지 파일을 읽어서 응답
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaUtil.getMediaType(ext));
        return new ResponseEntity<>(bytes, headers, HttpStatus.OK);
    }
    
    // 목록
    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("[GET] - /qr - qr 목록");
        try {
            List<QR> qrList = qrService.list();
            if( qrList == null )
            log.info("조회된 qr 목록 없음");
        else 
            log.info("qr 수 : " + qrList.size());

        return new ResponseEntity<>(qrList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 조회
    @GetMapping("/{qrNo}")
    public ResponseEntity<?> getOne(@PathVariable Integer qrNo) {
       log.info("[GET] - /qr/" + qrNo  + " - qr 목록 조회");
       try {
            QR qr = qrService.select(qrNo);
            if( qr == null ) {
                qr = new QR();
                return new ResponseEntity<>(qr, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(qr, HttpStatus.OK); 
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 등록
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody QR qr) {
        log.info("[POST] - /qr - qr 등록");
        try {
            int result = qrService.insert(qr);
            if( result > 0 )
                return new ResponseEntity<>("qr 등록 완료", HttpStatus.CREATED);  // 201
            else
                return new ResponseEntity<>("qr 등록 실패", HttpStatus.OK);  

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 수정
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody QR qr) {
        log.info("[PUT] - /qr - qr 수정");
        int qrNo = qr.getQrNo();
        qr.setQrNo(qrNo);
        log.info("qrNo 확인 : ");
        try {
            int result = qrService.update(qr);
            if( result > 0 )
                return new ResponseEntity<>("상품 수정 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("상품 수정 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // 삭제
    @DeleteMapping("/{qrNo}")
    public ResponseEntity<?> destroy(@PathVariable Integer qrNo) {
        log.info("[DELETE] - /qr/" + qrNo + " - qr 삭제");
        try {
            int result = qrService.delete(qrNo);
            if( result > 0 )
                return new ResponseEntity<>("qr 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("qr 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}