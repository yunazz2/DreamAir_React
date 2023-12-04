package com.joeun.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/bus")
public class BusController {

    @GetMapping(value={"/", ""})
    public String index() {
        return "bus/index";
    }

    @GetMapping(value="/{sub}")
    public String index(@PathVariable String sub) {
        return "bus/" + sub;
    }
    
}
