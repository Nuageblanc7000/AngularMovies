import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MovieResolver } from './shared/resolver/movie.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'movie/:id',
    component: MoviePageComponent,
    resolve: { data: MovieResolver },
  },
  {
    path: 'connexion',
    component: ConnexionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
