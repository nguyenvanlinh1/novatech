package com.nvl.novatech.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



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

    @Size(max = 1000)
    String description;
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

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "category_id")
    Category category;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    List<Review> reviews = new ArrayList<>();

}
