// package com.nvl.novatech.config;

// import java.util.Collection;
// import java.util.Map;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.oauth2.core.user.OAuth2User;

// public class CustomOAuth2User implements OAuth2User{

//     private OAuth2User user;


//     public CustomOAuth2User(OAuth2User user) {
//         this.user = user;
//     }

//     @Override
//     public Map<String, Object> getAttributes() {
//         return user.getAttributes();
//     }

//     @Override
//     public Collection<? extends GrantedAuthority> getAuthorities() {
//         return user.getAuthorities();
//     }

//     @Override
//     public String getName() {
//         return user.getAttribute("name");
//     }

//     public String getEmail(){
//         System.out.printf(user.getAttribute("Email"));
//         return user.getAttribute("email");
//     }
    
// }
