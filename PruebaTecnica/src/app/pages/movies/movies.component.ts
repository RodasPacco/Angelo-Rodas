import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie/movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  selectedGenres: string[] = [];
  filterTitle!: string;
  filterDescription!: string;
  movies: IMovie[] = [];
  constructor(private dataService: MoviesService) {
    this.dataService.getAll().subscribe({
      next: (response) => {
        console.log(response);
        if (response) {
          this.movies = response;
        } else {
          this.movies = this.dataService.data;
        }
      },
      error: (err) => {
        console.log(err);
        this.movies = this.dataService.data;
      },
    });
  }

  ngOnInit() {}

  addSelectGenre(genre: string) {
    let findOne = this.selectedGenres.find((row) => row === genre);
    if (findOne) {
      return;
    }
    this.selectedGenres.push(genre);
  }

  deleteGenre(genre: string) {
    this.selectedGenres = this.selectedGenres.filter((row) => row !== genre);
  }

  private filterText(filter: IMovie[], filterText: string, column: string) {
    if (filterText && filterText.trim().length > 2) {
      filter = filter.filter((row: any) =>
        row[column].toUpperCase().includes(filterText.toUpperCase())
      );
    }
    return filter;
  }

  get movieFilters() {
    let filter = [...this.movies];
    if (this.selectedGenres.length > 0) {
      filter = filter.filter((row) => this.selectedGenres.includes(row.genre));
    }
    filter = this.filterText(filter, this.filterTitle, 'title');
    filter = this.filterText(filter, this.filterDescription, 'description');
    return filter;
  }
}
