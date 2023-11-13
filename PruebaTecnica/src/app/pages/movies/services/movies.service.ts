import { Injectable } from '@angular/core';
import { IMovie } from '../movie/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/movies';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  data: IMovie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency',
      genre: 'Drama',
    },
    {
      id: 2,
      title: 'Inception',
      description:
        'A thief who steals corporate secrets though the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O',
      genre: 'Action',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description:
        'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham',
      genre: 'Action',
    },

    {
      id: 4,
      title: 'Pulp Fiction',
      description: `The lives of two mob hitmen, a boxer, a ganster's wife, and a pair of diner bandits interwine in four tales of violence and redemption.`,
      genre: 'Crime',
    },
    {
      id: 5,
      title: 'The Goodfather',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      genre: 'Crime',
    },
    {
      id: 6,
      title: 'Fight Club',
      description:
        'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      genre: 'Drama',
    },
  ];
  genres: string[] = ['Drama', 'Action', 'Crime'];

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(baseUrl);
  }
  
  movieByTitle(title: string) {
    return this.data.filter((row) =>
      row.title.toUpperCase().includes(title.toUpperCase())
    )[0];
  }
}
