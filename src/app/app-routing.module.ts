import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { SavedFilmComponent } from './features/saved-film/saved-film.component';
import { ProfileComponent } from './features/profile/profile.component';
import { DetailFilmComponent } from './features/detail-film/detail-film.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'home', component: HomeComponent},
    { path:'login', component: LoginComponent},
    { path:'sign-up', component: SignUpComponent},
    { path:'saved-film', component: SavedFilmComponent},
    { path:'profile', component: ProfileComponent},
    { path:'detail-film', component: DetailFilmComponent},
    { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
