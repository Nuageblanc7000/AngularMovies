import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genres } from '../interface/genre';
import { Movie } from '../interface/movie';
import { Movies } from '../interface/movies';
import { Video } from '../interface/video';
const PUBLIC_KEY = 'api_key=fb5aa3bf9de80dc918a292d05084ad4e';
const BASE_URL = 'https://api.themoviedb.org';
const LANG = '&language=fr';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public view: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}
  getAllMovies(genre: number = 12, page: number = 3): Observable<Movies> {
    const url = `${BASE_URL}/3/discover/movie?with_genres=${genre}&page=${page}&language=fr&${PUBLIC_KEY}`;

    return this._http.get<Movies>(url);
  }
  getOneMovies(id: number): Observable<Movie> {
    return this._http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fb5aa3bf9de80dc918a292d05084ad4e&language=fr `
    );
  }

  getAllGenre(): Observable<Genres> {
    return this._http.get<Genres>(
      ` ${BASE_URL}/3/genre/movie/list?${LANG}&${PUBLIC_KEY}`
    );
  }

  getOneMustMovie(genre: number = 12, page: number = 3) {
    const url = `${BASE_URL}/3/discover/movie?with_genres=${genre}&page=${page}&language=fr&${PUBLIC_KEY}`;
    return this._http.get<Movies>(url);
  }

  getVideo(id: number): Observable<Video> {
    return this._http.get<Video>(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fb5aa3bf9de80dc918a292d05084ad4e&language=fr`
    );
  }
}
