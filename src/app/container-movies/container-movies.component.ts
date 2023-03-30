import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/interface/movie';

import { Movies } from '../shared/interface/movies';
import { MovieService } from '../shared/Services/movie.service';

@Component({
  selector: 'app-container-movies',
  templateUrl: './container-movies.component.html',
  styleUrls: ['./container-movies.component.scss'],
})
export class ContainerMoviesComponent {
  movies!: Movies;
  idMovie?: number;
  viewPop?: boolean;
  movie!: Movie;
  view: boolean = false;
  unsubscribe: Subscription = new Subscription();

  constructor(private _serviceMovies: MovieService, private _router: Router) {}
  ngOnInit(): void {
    this.unsubscribe.add(
      this._serviceMovies
        .getAllMovies(18, 2)
        .subscribe((m: Movies) => (this.movies = m))
    );
  }
  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }
  open(obj: { id: number; view: boolean }) {
    this.idMovie = obj.id;
    this.view = obj.view;
    this.unsubscribe.add(
      this._serviceMovies
        .getOneMovies(obj.id)
        .subscribe((m: Movie) => (this.movie = m))
    );
  }

  close(view: boolean): void {
    this.view = view;
  }

  onNavigateMovie(id: number) {
    this._router.navigate(['movie', id]);
  }
}
