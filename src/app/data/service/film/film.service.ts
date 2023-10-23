import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from '../../interfaces/film';
import { ApiService } from '../api/api.service';
import { Movie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  savedItem : any[] = []
  

  constructor(private apiService: ApiService) { }

//   getListFilm(): Observable<Film[]>{
//       const films = of(FILMS)
//       return films
//   }

  getSavedItem(): Observable<Film[]>{
      const savedFilms = of(this.savedItem)
      return savedFilms
  }

  public getUser(): Movie{
     return JSON.parse(localStorage.getItem('movie')!)
  }

  public setUser(value: Movie){
     localStorage.setItem('movie', JSON.stringify(value));
  }

  public outUser(){
     localStorage.removeItem('movie');
  }
}
