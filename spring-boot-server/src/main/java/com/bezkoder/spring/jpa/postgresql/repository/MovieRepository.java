package com.bezkoder.spring.jpa.postgresql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.jpa.postgresql.model.Movie;


public interface MovieRepository extends JpaRepository<Movie, Integer> {
  List<Movie> findAll();
}
