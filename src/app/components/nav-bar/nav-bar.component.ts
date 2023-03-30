import { Component, Input } from '@angular/core';
import { Link } from 'src/app/shared/interface/link';

@Component({
  selector: '[app-nav-bar]',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() title: string = 'Movies';
  @Input() links!: Link[];
}
