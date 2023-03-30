import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveData,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Video } from '../interface/video';
import { MovieService } from '../Services/movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements ResolveData {
  constructor(private _serviceMovie: MovieService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Video> {
    const id: any = route.paramMap.get('id');
    return this._serviceMovie.getVideo(id);
  }
}
