import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/shared/interface/movie';
import { MovieService } from 'src/app/shared/Services/movie.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: '  scale(1)',
        })
      ),
      state(
        'close',
        style({
          transform: 'scale(0)',
        })
      ),
      transition('open => close', animate(200)),
      transition('close => open', animate(200)),
    ]),
  ],
})
export class PopComponent {
  @Input() movie?: Movie;
  @Input() view?: boolean;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onNavigateEmit: EventEmitter<number> = new EventEmitter();
  state: string = 'open';
  constructor() {}
  close() {
    this.view = false;
    this.onClick.emit(this.view);
  }
  onNavigate(id: number) {
    this.onNavigateEmit.emit(id);
  }
}
