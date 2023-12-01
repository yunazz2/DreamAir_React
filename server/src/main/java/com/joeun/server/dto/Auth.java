package com.joeun.server.dto;

import lombok.Data;

@Data
public class Auth {
    
    private int authNo;
    private String userId;
    private String auth;

}
