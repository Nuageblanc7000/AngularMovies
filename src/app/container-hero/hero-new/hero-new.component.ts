import { Component, Input } from '@angular/core';
import { Result } from 'src/app/shared/interface/movies';
import { Video } from 'src/app/shared/interface/video';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss'],
})
export class HeroNewComponent {
  @Input() title: string = 'LA vie ';
  @Input() movie!: Result;
  @Input() video!: Video;
  action: boolean = false;
  timeout: any = null;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.timeout = setTimeout(() => {
      this.action = true;
      clearTimeout(this.timeout);
    }, 3000);
  }
}
