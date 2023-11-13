import { NgModule } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { NgOptimizedImage } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { FiltersComponent } from './filters/filters.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { ChipComponent } from './movie/chip/chip.component';
import { SelectFilterComponent } from './filters/selectFilter/selectFilter.component';
import { FormsModule } from '@angular/forms';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  imports: [CommonModule, NgOptimizedImage, MoviesRoutingModule, FormsModule],
  declarations: [
    MoviesComponent,
    MovieComponent,
    FiltersComponent,
    ChipComponent,
    SelectFilterComponent,
    MoviePageComponent,
  ],
})
export class MoviesModule {}
