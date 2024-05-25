package com.nvl.novatech.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nvl.novatech.dto.request.ApiResponse;
import com.nvl.novatech.dto.request.SingleChatRequest;
import com.nvl.novatech.model.Chat;
import com.nvl.novatech.model.User;
import com.nvl.novatech.service.ChatService;
import com.nvl.novatech.service.UserService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chats")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ChatController {

    // @Autowired
    // SimpMessagingTemplate simpMessagingTemplate;

    // @MessageMapping("/sendMessage")
    // @SendTo("/topic/messages")
    // public ChatMessage sendMessage(@Payload ChatMessage chatMessage){
    //     return new ChatMessage(HtmlUtils.htmlEscape(chatMessage.getContent()));
    // }

    // @MessageMapping("/private-message")
    // @SendTo("/topic/public")
    // public ChatMessage receiveMessage(@Payload ChatMessage chatMessage){
    //     simpMessagingTemplate.convertAndSend("/topic/" + );
    //     return chatMessage;
    // }

    ChatService chatService;
    UserService userService;

    @PostMapping("/single")
    public ApiResponse<Chat> createChatHandle(@RequestBody SingleChatRequest singleChatRequest, @RequestHeader("Authorization") String jwt){
        User reqUser = userService.findUserProfileByJwt(jwt);
        return ApiResponse.<Chat>builder()
            .result(chatService.createChat(reqUser, singleChatRequest.getUserId()))
            .build();
    }

    @GetMapping("/user")
    public ApiResponse<List<Chat>> findAllChatByUserId(@RequestHeader("Authorization") String jwt){
        User reqUser = userService.findUserProfileByJwt(jwt);
        return ApiResponse.<List<Chat>>builder()
            .result(chatService.findAllChatByUserId(reqUser.getUserId()))
            .build();
    }

    // @GetMapping("/{chatId}")
    // public ApiResponse<Chat> findChatByUserId(@RequestHeader("Authorization") String jwt){
    //     User reqUser = userService.findUserProfileByJwt(jwt);
    //     return ApiResponse.<Chat>builder()
    //         .result(chatService.(reqUser.getUserId()))
    //         .build();
    // }
}
