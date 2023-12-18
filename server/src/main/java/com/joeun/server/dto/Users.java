package com.joeun.server.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class Users {

    // users 테이블
    private int userNo;
    private int[] userNos;
    private String userId;
    private String userPw;
    private String userPwCheck;     // 비밀번호 확인
    private String name;
    private String address;
    private String phone;
    private String email;
    private Date regDate;
    private Date updDate;
    private String status;

    private List<Auth> authList;    

    // user2 테이블
    private int userNo2;
    private int[] userNos2;

    // auth 테이블
    private String auth;
    private int authNo;

    // passport 테이블
    private String passportNo;
    private String[] passportNos;
    private int pinType;
    private int[] pinTypes;
    private String lastName;
    private String[] lastNames;
    private String firstName;
    private String[] firstNames;
    private String nationality;
    private String[] nationalitys;
    private String expirationDate;
    private String[] expirationDates;

    // PIN 테이블
    private String idCardNo;
    private String idDriverNo;

    // mileage 테이블
    private double mileage;

    // persistent_logins 테이블
    private int pNo;
    private String series; 
    private String token;
    private Date last_used;

    private int enabled;            // 휴면여부

    public Users() {
        
    }
    
    public Users(Users user) {
        this.userNo = user.getUserNo();
        this.userId = user.getUserId();
        this.userPw = user.getUserPw();
        this.name = user.getName();
        this.email = user.getEmail();
        this.authList = user.getAuthList();
    }

}
    
  
   
