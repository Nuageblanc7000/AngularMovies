import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from 'src/app/shared/interface/movies';
import { MovieService } from 'src/app/shared/Services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent {
  @Input() movies!: Movies;
  @Output() onClick: EventEmitter<{ id: number; view: boolean }> =
    new EventEmitter();
  id?: number;
  @Input() view?: boolean;

  open(id: number): void {
    this.onClick.emit({ id, view: true });
  }
}
