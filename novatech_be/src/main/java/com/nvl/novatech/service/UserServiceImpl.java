package com.nvl.novatech.service;

import com.nvl.novatech.config.JwtProvider;
import com.nvl.novatech.dto.request.AuthenticationRequest;
import com.nvl.novatech.dto.request.UserCreationRequest;
import com.nvl.novatech.dto.request.UserUpdateRequest;
import com.nvl.novatech.dto.response.AuthenticationResponse;
import com.nvl.novatech.dto.response.UserResponse;
import com.nvl.novatech.exception.AppException;
import com.nvl.novatech.exception.ErrorCode;
import com.nvl.novatech.mapper.UserMapper;
import com.nvl.novatech.model.Cart;
import com.nvl.novatech.model.User;
import com.nvl.novatech.repository.CartRepository;
import com.nvl.novatech.repository.RoleRepository;
import com.nvl.novatech.repository.UserRepository;
import lombok.AccessLevel;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService{

    UserRepository userRepository;
    RoleRepository roleRepository;
    CartService cartService;
    PasswordEncoder passwordEncoder;
    UserMapper userMapper;
    CartRepository cartRepository;

    @NonNull
    private JwtProvider jwtProvider;


    @Override
    public AuthenticationResponse createUser(AuthenticationRequest request) {
        if(userRepository.existsByEmail(request.getEmail())) throw new AppException(ErrorCode.USER_EXISTED);

        User user = userMapper.toUser(request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user = userRepository.save(user);
        cartService.createCart(user);
        var role = new HashSet<String>();
        role.add(com.nvl.novatech.enums.Role.USER.name());
        return userMapper.toAuthenticationResponse(user);
    }

    @Override
    public UserResponse getInfo() {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();
        User user = userRepository.findByEmail(name).orElseThrow( () -> new AppException(ErrorCode.USER_NOT_EXISTED));
        return userMapper.toUserResponse(user);
    }

    @Override
    public void deleteUser(Long userId) {
        Cart cart = cartRepository.findCartbyUserId(userId);
        cartRepository.delete(cart);
        userRepository.deleteById(userId);
    }

    @Override
    public List<UserResponse> getUsers() {
        return userRepository.findAll().stream().map(userMapper::toUserResponse).toList();
    }

    @Override
    public UserResponse getUser(Long userId) {
        return userMapper.toUserResponse(userRepository.findById(userId).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED)));
    }

    @Override
    public UserResponse updateUser(Long userId, UserUpdateRequest request) {
        User user = userRepository.findById(userId).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        userMapper.updateUser(user, request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userMapper.toUserResponse(userRepository.save(user));
    }

    @Override
    public User findUserProfileByJwt(String jwt) {
        String email = jwtProvider.extractUsername(jwt);
        User user = userRepository.findByEmail(email).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        return user;
    }
}
