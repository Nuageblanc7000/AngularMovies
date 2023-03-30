import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { Result } from '../shared/interface/video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-container-movie',
  templateUrl: './container-movie.component.html',
  styleUrls: ['./container-movie.component.scss'],
})
export class ContainerMovieComponent {
  allow: any =
    'accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; controls="false';
  video!: Result;
  constructor(
    private _ac: ActivatedRoute,
    private _sanitize: DomSanitizer,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._ac.data
      .pipe(map((x) => (x['data']['results'] ? x['data']['results'][0] : [])))
      .subscribe((data) => (this.video = data));
  }

  onValidUrl() {
    return this._sanitize.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' +
        this.video.key +
        '?autoplay=1&mute=1&controls=0'
    );
  }
  back() {
    this._router.navigate(['/']);
  }

  mute() {}
}
