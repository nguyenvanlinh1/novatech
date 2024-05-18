package com.nvl.novatech.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Specification {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long specificationId;
    String screenSize;
    String screenTechnology;
    String ramCapacity;
    String battery;
    String cpu;
    String material;
    String operatingSystem;
    String resolution;
    String size;
    String weight;
    String feature;
    String utilities;

    @OneToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore
    Product product;
}
