import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from './movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input()
  movie!: IMovie;
  constructor(private router: Router) {}

  ngOnInit() {}

  get movieSrc() {
    return this.movie.id ? 'assets/img/movies/' + this.movie.id + '.jpg' : '';
  }

  goDetails() {
    this.router.navigate(['/movies/' + this.movie.title]);
  }
}
