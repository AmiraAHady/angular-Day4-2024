import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'details/:id', component: MovieDetailsComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactusComponent },
     
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
   //   wildcard route
   { path: '**', component: PageNotFoundComponent },
];
// export const routes: Routes = [
//   // first match wins
//   { path: '', redirectTo: 'movies', pathMatch: 'full' },
//   { path: 'movies', component: MoviesComponent },
//   { path: 'details/:id', component: MovieDetailsComponent },
//   { path: 'about', component: AboutUsComponent },
//   { path: 'contact', component: ContactusComponent },
//   //   wildcard route
//   { path: '**', component: PageNotFoundComponent },
// ];
