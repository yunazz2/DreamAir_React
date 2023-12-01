package com.joeun.server.service;

import java.util.List;

import com.joeun.server.dto.Admin;
import com.joeun.server.dto.Booking;
import com.joeun.server.dto.Users;

public interface AdminService {
  
    // 전체 관리자 조회
    public List<Admin> admin_list() throws Exception;

    // 관리자 등록
    public int admin_insert(Admin admin) throws Exception;

    // 관리자 정보 삭제
    public int admin_delete(int adminNo) throws Exception;
        
    // 전체 사용자 조회
    public List<Users> user_list() throws Exception;

    // 사용자 수동 등록
    public int user_insert(Users users) throws Exception;
    
    // 사용자 정보 수정
    public int user_update(int userNo) throws Exception;

    // 사용자 정보 삭제
    public int user_delete(int userNo) throws Exception;
  
    // 전체 예매 내역 조회
    public List<Booking> booking_list() throws Exception;

    // 항공권 번호로 당일의 탑승객 조회
    public List<Booking> ticket_selectList(String today, int flightNo, int checkedIn, int isBoarded) throws Exception;
    public List<Booking> ticket_selectList_w(String today, int flightNo) throws Exception;

    // 탑승권 목록 내역 조회(전체)
    public List<Booking> ticket_list(String today) throws Exception;

    // 탑승 처리 : (탑승완료1, 미탑승0)
    public int ticket_update_c(int ticketNo, int checkedIn) throws Exception;
    public int ticket_update_b(int ticketNo, int isBoarded) throws Exception;

    // 탑승권 조회 - ticketNo
    public List<Booking> pas_ticketList(int ticketNo) throws Exception;

    // boardingTime
    public int update_boardingTime(int ticketNo, String boardingTime) throws Exception;
    

}