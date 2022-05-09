package com.example.demo.repo;

import java.time.LocalDate;

public interface LocalDateConverterRepository {
    default LocalDate convert(String startDate) {
        return null;
    }
}
