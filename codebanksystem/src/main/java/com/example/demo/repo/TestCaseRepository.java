package com.example.demo.repo;

import com.example.demo.model.TestCase;
import org.springframework.data.repository.CrudRepository;

public interface TestCaseRepository extends CrudRepository<TestCase, Integer> {
}
