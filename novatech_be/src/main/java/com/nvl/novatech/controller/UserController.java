package com.nvl.novatech.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nvl.novatech.dto.request.ApiResponse;
import com.nvl.novatech.dto.request.UserCreationRequest;
import com.nvl.novatech.dto.response.UserResponse;
import com.nvl.novatech.model.User;
import com.nvl.novatech.service.UserService;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    
    UserService userService;

    @PostMapping
    ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request){

        return ApiResponse.<UserResponse>builder()
            .result(userService.createUser(request))
            .build();
    }

    @GetMapping
    ApiResponse<List<UserResponse>> getAllUser(){
        return ApiResponse.<List<UserResponse>>builder()
            .result(userService.getUsers())
            .build();
    }

    @GetMapping("/profile")
    ApiResponse<User> getUserByJwt(@RequestHeader("Authorization") String jwt){
        return ApiResponse.<User>builder()
            .result(userService.findUserProfileByJwt(jwt))
            .build();
    }
}
