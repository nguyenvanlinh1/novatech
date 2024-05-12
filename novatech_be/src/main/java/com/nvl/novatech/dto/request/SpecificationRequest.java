package com.nvl.novatech.dto.request;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SpecificationRequest {
    
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
}
