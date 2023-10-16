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
  urlImg: string = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
  urlId: string = "/detail-film/" 
  films: any[] = []
  errorMessage!: string;

  constructor(
    private filmService: FilmService,
    private apiService: ApiService){
  }

  ngOnInit(): void {
    this.getListMovies();
  }

  getListMovies(){
    return this.apiService.getListData()
       .subscribe((data: any) => {
           this.films = data['results']
           console.log(this.films)
       })
  }

  searchMoviesByKeyword() {
    return 
  }
}
