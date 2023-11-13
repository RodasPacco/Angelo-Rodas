package com.bezkoder.spring.jpa.postgresql.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "genres")
public class Genre {
  @Id
  @Column(name = "name")
  private String name;

  // @JsonManagedReference
  // @OneToMany(fetch = FetchType.LAZY, mappedBy = "genre", cascade = {
  //     CascadeType.MERGE,
  //     CascadeType.PERSIST,
  //     CascadeType.REMOVE
  // })
  // private List<Movie> movies;

}
