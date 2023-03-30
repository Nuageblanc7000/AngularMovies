import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss'],
  animations: [
    trigger('square', [
      state(
        'normal',
        style({
          border: '2px solid #444',
          borderRadius: '0px',
        })
      ),
      state(
        'wild',
        style({
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '50%',
        })
      ),
      transition('normal => wild', animate(200)),
      transition('wild => normal', animate(200)),
    ]),
  ],
})
export class ConnexionPageComponent {
  public state = 'wild';
}
