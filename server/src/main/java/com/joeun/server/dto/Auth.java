package com.joeun.server.dto;

import lombok.Data;

@Data
public class Auth {
    
    private int authNo;
    private String userId;
    private String auth;

    public Auth() {

    }

    public Auth(String userId, String auth) {
        this.userId = userId;
        this.auth = auth;
    }

}
