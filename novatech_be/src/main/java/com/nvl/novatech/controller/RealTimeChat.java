package com.nvl.novatech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.nvl.novatech.model.Message;

public class RealTimeChat {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    
    @MessageMapping("/message")
    @SendTo("/goup/public")
    public Message reciveMessage(@Payload Message message){
        
        simpMessagingTemplate.convertAndSend("/goup/" + message.getChat().getChatId().toString(), message);

        return message;
    }
}
