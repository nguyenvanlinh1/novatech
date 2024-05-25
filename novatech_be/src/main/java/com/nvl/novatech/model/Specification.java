package com.nvl.novatech.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Size;
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

    @Size(max = 1000)
    String feature;

    @Size(max = 1000)
    String utilities;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    @JsonIgnore
    Product product;
}
