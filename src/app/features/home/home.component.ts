import { NoopAnimationPlayer } from '@angular/animations';
import { Component } from '@angular/core';
import { Film } from 'src/app/data/interfaces/film';
import { Movie } from 'src/app/data/interfaces/movie';
import { Page } from 'src/app/data/interfaces/page';
import { FILMS } from 'src/app/data/mocks/mock-films';
import { ApiService } from 'src/app/data/service/api/api.service';
import { FilmService } from 'src/app/data/service/film/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  films: Film[] = []
  posts: Movie[] = [];
  errorMessage!: string;

  constructor(
    private filmService: FilmService,
    private apiService: ApiService){
  }

  ngOnInit(): void {
    this.getListFilm();
    this.getListMovies();
  }

  getListFilm():void {
    this.filmService.getListFilm()
    .subscribe(film => this.films = film)
  }

  getListMovies(){
    return this.apiService.getListData()
       .subscribe({
        next: (posts) => {
          this.posts = posts;
          console.log(this.posts["results"]);
        },
        error: (error) => {
          this.errorMessage = error;
        },
       })
  }
}
