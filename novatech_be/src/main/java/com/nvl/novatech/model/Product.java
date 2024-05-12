package com.nvl.novatech.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PACKAGE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long productId;
    String name;
    String description;
    String brand;
    double price;
    double discountedPrice;
    double discountPercent;
    int quantity;

    @OneToMany(cascade = CascadeType.ALL)
    Set<Image> images = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    Set<Color> colors = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "specification_id")
    Specification specification;

    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;

    @OneToMany
    List<Review> reviews = new ArrayList<>();

}
