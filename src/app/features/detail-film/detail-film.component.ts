import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/data/service/api/api.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent {
  urlImg: string = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
  urlId: string = "/detail-film/"  
  film: any = []
  
   constructor(
     private apiService : ApiService,
     private route: ActivatedRoute,
     private location: Location){ 
   }

   ngOnInit():void{
      this.getFilmById();
   }

   getFilmById(){
     const id = Number(this.route.snapshot.paramMap.get('id'));
     return this.apiService.getDetailData(id)
      .subscribe((movie:any) =>  {
        this.film = movie
        console.log(this.film)
      })
   }

}
