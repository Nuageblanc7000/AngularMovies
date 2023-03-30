import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerMoviesComponent } from './container-movies/container-movies.component';
import { ListMovieComponent } from './container-movies/list-movie/list-movie.component';

import { GenreListComponent } from './container-genre/genre-list/genre-list.component';
import { ContainerGenreComponent } from './container-genre/container-genre.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContainerHeroComponent } from './container-hero/container-hero.component';
import { HeroNewComponent } from './container-hero/hero-new/hero-new.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PopComponent } from './container-movies/pop/pop.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { ContainerMovieComponent } from './container-movie/container-movie.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerMoviesComponent,
    ListMovieComponent,
    ContainerGenreComponent,
    GenreListComponent,
    HeaderComponent,
    NavBarComponent,
    ContainerHeroComponent,
    HeroNewComponent,
    HomePageComponent,
    PopComponent,
    MoviePageComponent,
    ContainerMovieComponent,
    ConnexionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
