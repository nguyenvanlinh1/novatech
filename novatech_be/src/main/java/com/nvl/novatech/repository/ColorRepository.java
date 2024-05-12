package com.nvl.novatech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nvl.novatech.model.Color;

@Repository
public interface ColorRepository extends JpaRepository<Color, Long>{
    
}
