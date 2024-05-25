package com.nvl.novatech.service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.DefaultOAuth2AuthenticatedPrincipal;
import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;

public class OAuth2Service implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
         OAuth2UserAuthority authority = new OAuth2UserAuthority(userRequest.getAdditionalParameters());
        Map<String, Object> attributes = userRequest.getAdditionalParameters();
        String usernameAttributeName = userRequest.getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName();
        Collection<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(authority);
        OAuth2AuthenticatedPrincipal principal = new DefaultOAuth2AuthenticatedPrincipal(attributes, authorities);
        return new DefaultOAuth2User(authorities, attributes, usernameAttributeName);
    }

}
