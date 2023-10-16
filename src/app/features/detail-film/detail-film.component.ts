import { Component } from '@angular/core';
import { Film } from 'src/app/data/interfaces/film';
import { FilmService } from 'src/app/data/service/film/film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent {
   listFilm : Film[] = []  
  
   constructor(private filmService : FilmService){ }

   ngOnInit():void{
      this.getListSavedItem();
   }

   getListSavedItem():void{
     this.filmService.getSavedItem()
        .subscribe(films => this.listFilm = films);
   }

   addSavedFilm(film : Film):void {
     this.filmService.addSavedItem(film);
   }

   deleteSavedFilmById(filmId : Film): void {
     this.filmService.deleteFilm(filmId)
   }

   clearSavedItem():void{
     this.filmService.clearFilm();
   }
}
