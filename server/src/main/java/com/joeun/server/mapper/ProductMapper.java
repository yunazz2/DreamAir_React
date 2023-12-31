package com.joeun.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.joeun.server.dto.Product;
import com.joeun.server.dto.ProductIo;

@Mapper
public interface ProductMapper {

    // 항공기 전체 조회
    public List<Product> flight_list() throws Exception;

    // 항공기 정보 조회
    public Product flight_select(int flightNo) throws Exception;

    // 항공기 정보 등록
    public int flight_insert(Product flight) throws Exception;

    // 항공기 정보 수정
    public int flight_update(int flightNo) throws Exception;

    // 항공기 정보 삭제
    public int flight_delete(int flightNo) throws Exception;

    // 항공기 번호(기본키) 최댓값
    public int flight_maxPk() throws Exception;

    // 상품(항공권) 전체 조회
    public List<Product> product_list() throws Exception;

    // 상품(항공권) 선택 조회
    public Product product_select(int productNo) throws Exception;

    // 상품(항공권) 등록
    public int product_insert(Product product) throws Exception;

    // 상품(항공권) 수정
    public int product_update(int productNo) throws Exception;

    // 상품(항공권) 삭제
    public int product_delete(int productNo) throws Exception;

    // 상품(항공권)(기본키) 최댓값
    public int product_maxPk() throws Exception;

    // 상품이 등록되면 IN / 예매가 완료되면 OUT -> 예매가 환불되면 IN
    public int productIO_insert(ProductIo productIo) throws Exception;
}
