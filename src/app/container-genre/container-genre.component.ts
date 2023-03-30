import { Component } from '@angular/core';
import { Genre, Genres } from 'src/app/shared/interface/genre';
import { MovieService } from 'src/app/shared/Services/movie.service';

@Component({
  selector: 'app-container-genre',
  templateUrl: './container-genre.component.html',
  styleUrls: ['./container-genre.component.scss'],
})
export class ContainerGenreComponent {
  genre!: Genres;
  constructor(private _service: MovieService) {}
  ngOnInit(): void {
    this._service.getAllGenre().subscribe((x: Genres) => (this.genre = x));
  }
}
