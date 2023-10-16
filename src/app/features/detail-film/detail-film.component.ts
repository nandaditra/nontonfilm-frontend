import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
   film: Number = 1 
  
   constructor(
     private filmService : FilmService,
     private route: ActivatedRoute,
     private location: Location){ 
    
   }

   ngOnInit():void{
      
   }

   getFilmById(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.filmService.getDetailFilmById(id)
     .subscribe(movie => this.film = movie)
   }

}
