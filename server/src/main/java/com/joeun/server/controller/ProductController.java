package com.joeun.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Files;
import com.joeun.server.dto.Product;
import com.joeun.server.service.FileService;
import com.joeun.server.service.ProductService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/product")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @Autowired
    private FileService fileService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("[GET] - /product - 상품 목록");
        try {
            List<Product> productList = productService.product_list();
            if( productList == null )
            log.info("조회된 상품 목록 없음");
        else 
            log.info("상품 목록 수 : " + productList.size());

        return new ResponseEntity<>(productList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{productNo}")
    public ResponseEntity<?> getOne(@PathVariable Integer productNo, Files files) {
       log.info("[GET] - /product/" + productNo  + " - 상품 목록 조회");
       try {
            Product product = productService.product_select(productNo);
            files.setParentTable("product");
            files.setParentNo(productNo);
            List<Files> fileList = fileService.listByParent(files); // 파일 정보
            
            Map<String, Object> response = new HashMap<>();
            response.put("product", product);
            response.put("fileList", fileList);

            if( product == null ) {
                product = new Product();
                return new ResponseEntity<>(product, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(product, HttpStatus.OK); 
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(Product product) {
        log.info("[POST] - /product - 상품 등록");
        log.info("productId : " + product.getProductId());

        List<MultipartFile> files = product.getFiles();

        if( files != null )
            for (MultipartFile file : files) {
                log.info("file : " +  file.getOriginalFilename());
            }
        
        try {
            int result = productService.product_insert(product);
            if( result > 0 )
                return new ResponseEntity<>("상품 등록 완료", HttpStatus.OK);  // 201
            else
                return new ResponseEntity<>("상품 등록 실패", HttpStatus.OK);  

        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(Product product) {
        log.info("[PUT] - /product - 상품 수정");
        int productNo = product.getProductNo();
        log.info("productNo 확인 : ");
        try {
            int result = productService.product_update(productNo);
            if( result > 0 )
                return new ResponseEntity<>("상품 수정 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("상품 수정 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{productNo}")
    public ResponseEntity<?> destroy(@PathVariable Integer productNo) {
        log.info("[DELETE] - /product/" + productNo + " - 상품 삭제");
        try {
            int result = productService.product_delete(productNo);
            if( result > 0 )
                return new ResponseEntity<>("상품 삭제 완료", HttpStatus.OK); 
            else
                return new ResponseEntity<>("상품 삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

