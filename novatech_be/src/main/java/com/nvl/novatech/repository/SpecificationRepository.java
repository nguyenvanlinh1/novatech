package com.nvl.novatech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nvl.novatech.model.Specification;

@Repository
public interface SpecificationRepository extends JpaRepository<Specification, Long>{
    
}
