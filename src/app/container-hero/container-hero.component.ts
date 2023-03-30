import { Component } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Result } from '../shared/interface/movies';
import { Video } from '../shared/interface/video';
import { MovieService } from '../shared/Services/movie.service';

@Component({
  selector: 'app-container-hero',
  templateUrl: './container-hero.component.html',
  styleUrls: ['./container-hero.component.scss'],
})
export class ContainerHeroComponent {
  movie!: Result;
  video!: Video;
  constructor(private _serviceMovies: MovieService) {}
  ngOnInit(): void {
    this.loadHero();
  }

  private loadHero() {
    this._serviceMovies
      .getAllMovies()
      .pipe(
        map((value) => {
          const rand = Math.round(Math.random() * value.results.length);
          this._serviceMovies
            .getVideo(value.results[rand].id)
            .subscribe((x: Video) => console.log(x));
          return value.results[rand];
        })
      )
      .subscribe((m: Result) => (this.movie = m));
  }
}
