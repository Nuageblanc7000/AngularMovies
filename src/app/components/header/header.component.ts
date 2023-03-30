import { Component } from '@angular/core';
import { Link } from 'src/app/shared/interface/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Links: Link[] = [
    {
      label: 'home',
      url: '/',
    },
    {
      label: "S'identifier",
      url: 'connexion',
      class: 'actived',
    },
  ];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.Links);
  }
}
