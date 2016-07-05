package org.byteworks.monopoly.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MonopolyController {

    @RequestMapping(path="/")
    public String hello() {
        return "Greetings Earthling!";
    }
}
