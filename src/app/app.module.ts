import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common'
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { SavedFilmComponent } from './features/saved-film/saved-film.component';
import { ProfileComponent } from './features/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DetailFilmComponent } from './features/detail-film/detail-film.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { EmptyComponent } from './shared/components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    SavedFilmComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    DetailFilmComponent,
    NotFoundComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
