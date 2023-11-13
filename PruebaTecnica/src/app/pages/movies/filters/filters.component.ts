import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { IMovie } from '../movie/movie';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  // genres: string[] = [];
  ngDestroyed = new Subject();
  @Input() selectedGenres!: string[];
  name: string = '';
  description: string = '';
  @Output() selectGenre = new EventEmitter<string>();
  @Output() deleteGenre = new EventEmitter<string>();
  @Output() filterTitle = new EventEmitter<string>();
  @Output() filterDescription = new EventEmitter<string>();
  nameQueryChanged: Subject<string> = new Subject<string>();
  descriptionQueryChanged: Subject<string> = new Subject<string>();

  constructor(private dataService: MoviesService) {
    this.emitFilterText(this.nameQueryChanged, true);
    this.emitFilterText(this.descriptionQueryChanged, false);
  }

  get genres() {
    return this.dataService.genres;
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.ngDestroyed.next(null);
  }

  private emitFilterText(subject: Subject<string>, isTitle: boolean) {
    subject
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.ngDestroyed)
      )
      .subscribe((text) => {
        console.log(text);
        if (isTitle) {
          this.filterTitle.emit(text);
        } else {
          this.filterDescription.emit(text);
        }
      });
  }

  selectGen(genre: string) {
    if (this.isSelectGenre(genre)) {
      this.deleteGenre.emit(genre);
    } else {
      this.selectGenre.emit(genre);
    }
  }

  isSelectGenre(genre: string) {
    return this.selectedGenres.includes(genre);
  }

  updateFilterName(query: string) {
    this.nameQueryChanged.next(query);
  }

  updateFilterDescription(query: string) {
    this.descriptionQueryChanged.next(query);
  }
}
