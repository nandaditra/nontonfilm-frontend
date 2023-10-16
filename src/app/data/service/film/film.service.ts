import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from '../../interfaces/film';
import { FILMS } from '../../mocks/mock-films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  savedItem : any[] = []

  constructor() { }

  getListFilm(): Observable<Film[]>{
      const films = of(FILMS)
      return films
  }

  getSavedItem(): Observable<Film[]>{
      const savedFilms = of(this.savedItem)
      return savedFilms
  }

  addSavedItem(film : Film) {
     this.savedItem.push(film)
  }

  deleteFilm(filmId : Film) {
     this.savedItem.map((film)=> film.id !== filmId)
  }

  clearFilm(){
     this.savedItem = []
  }
}
