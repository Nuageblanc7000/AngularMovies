import { Component, Input } from '@angular/core';
import { Genre, Genres } from 'src/app/shared/interface/genre';
import { Link } from 'src/app/shared/interface/link';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
})
export class GenreListComponent {
  @Input() genre!: Genres;
}
