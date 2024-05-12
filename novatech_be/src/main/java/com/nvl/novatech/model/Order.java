package com.nvl.novatech.model;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "orders")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long orderId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    List<OrderItem> orderItems = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "address_id")
    Address address;

    double totalPrice;
    double totalItems;
    double totalDiscountedPrice;
    double totalRemain;

    String status;

    LocalDateTime orderDate;
    LocalDateTime deliveryDate;

}
