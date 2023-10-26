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
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FavouriteComponent } from './shared/components/favourite/favourite.component';
import { FavouriteBorderComponent } from './shared/components/favourite-border/favourite-border.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { FirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
    FavouriteComponent,
    FavouriteBorderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgOptimizedImage,
    NgxSkeletonLoaderModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4zpZNNpXiUZFW7j2mm90dTP80d03uplo",
      authDomain: "nontonmovie-eb44d.firebaseapp.com",
      projectId: "nontonmovie-eb44d",
      storageBucket: "nontonmovie-eb44d.appspot.com",
      messagingSenderId: "72362458557",
      appId: "1:72362458557:web:5b0d056ed165c36f53e6d4",
      measurementId: "G-9JCQX8B728"
    }),
    AngularFireAuthModule,
    FirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
