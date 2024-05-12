package com.nvl.novatech.dto.request;

import com.nvl.novatech.model.Specification;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductUpdateRequest {
    String name;
    String description;
    String brand;
    double price;
    double discountedPrice;
    double discountPercent;
    int quantity;

    Specification specification;
}
