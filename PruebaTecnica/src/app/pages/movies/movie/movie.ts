export interface IMovie {
  id: number;
  title: string;
  description: string;
  genre: string;
}


export function movieSrc(movie:IMovie) {
  return movie.id ? 'assets/img/movies/' + movie.id + '.jpg' : '';
}