import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { IMovie, movieSrc } from '../movie/movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  movie!: IMovie;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: MoviesService
  ) {
    this.movie = this.dataService.movieByTitle(
      this.route.snapshot.paramMap.get('id') as string
    );
  }

  ngOnInit() {}

  back() {
    this.router.navigate(['/movies']);
  }

  get movieSrc() {
    return movieSrc(this.movie);
  }
}
