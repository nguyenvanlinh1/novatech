package com.nvl.novatech.service;

import com.nvl.novatech.dto.request.UserCreationRequest;
import com.nvl.novatech.dto.request.UserUpdateRequest;
import com.nvl.novatech.dto.response.UserResponse;
import com.nvl.novatech.model.User;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserCreationRequest userCreationRequest);
    UserResponse getInfo();
    void deleteUser(Long userId);
    UserResponse updateUser(Long userId, UserUpdateRequest request);
    List<UserResponse> getUsers();
    UserResponse getUser(Long userId);

    User findUserProfileByJwt(String jwt);
}
