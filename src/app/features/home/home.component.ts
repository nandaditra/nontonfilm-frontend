import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  loading: boolean = true;
  favourite: boolean = false;
  notFound: boolean = false;

  constructor(
    private filmService: FilmService,
    private apiService: ApiService){
  }

  searchForm = new FormGroup({
    search: new FormControl(''),
 })

  ngOnInit(): void {
    this.getListMovies();
  }

  getListMovies(){
    this.loading = true;
    return this.apiService.getListData()
       .subscribe((data: any) => {
           this.films = data['results'].filter((film:any) => film['poster_path'] !== null)
           this.loading = false;   
    })
  }

  searchMoviesByKeyword() {
     this.loading = true;
     return this.apiService.getSearchByQuery(this.searchForm.value['search'])
      .subscribe((data : any)=> {
         if(data['results'] == null) {
            this.notFound = true
            console.log(this.notFound)
         }
         this.films = data['results'].filter((film:any) => film['poster_path'] !== null)
         this.loading = false; 
      })
  }

  addFavourite() {
      this.favourite = true
  }
}
