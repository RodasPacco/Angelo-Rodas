package com.bezkoder.spring.jpa.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.jpa.postgresql.model.Image;
import com.bezkoder.spring.jpa.postgresql.model.Movie;
import com.bezkoder.spring.jpa.postgresql.repository.ImageRepository;
import com.bezkoder.spring.jpa.postgresql.repository.MovieRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MovieController {

	@Autowired
	MovieRepository movieRepository;

	@Autowired
	ImageRepository imageRepository;

	@GetMapping("/movies")
	public ResponseEntity<List<Movie>> getAll() {
		try {
			List<Movie> movies = new ArrayList<Movie>();

			movieRepository.findAll().forEach(movies::add);
			if (movies.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			System.out.println(movies.size());
			return new ResponseEntity<>(movies, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/movies/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable("id") Integer id, @RequestBody Movie movie) {
		Optional<Movie> movieData = movieRepository.findById(id);
		if (movieData.isPresent()) {
			Movie _movie = movieData.get();
			_movie.setTitle(movie.getTitle());
			_movie.setDescription(movie.getDescription());
			_movie.setGenre(movie.getGenre());
			// _movie.setImage(movie.getImage());
			return new ResponseEntity<>(movieRepository.save(_movie), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// @PutMapping("/movies/{id}/image/{id2}")
	// public ResponseEntity<Movie> updateMovieImage(@PathVariable("id") Integer id, @PathVariable("id2") Long idImage) {
	// 	Optional<Movie> movieData = movieRepository.findById(id);
	// 	Optional<Image> imageData = imageRepository.findById(idImage);
	// 	if (movieData.isPresent() && imageData.isPresent()) {
	// 		Movie _movie = movieData.get();
	// 		Image _image = imageData.get();
	// 		System.out.println(_image);
	// 		_movie.setImage(_image);
	// 		return new ResponseEntity<>(movieRepository.save(_movie), HttpStatus.OK);
	// 	} else {
	// 		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	// 	}
	// }
}
