import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Page } from '../../interfaces/page';

interface Movie {
  id: number,
  original_title: string,
  overview: string,
  
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data_api : string = "https://api.themoviedb.org/3/"
  api_key : string = "api_key=b41c95c7bee406c6d3cc0151c57dd295"

  constructor(private http: HttpClient) { }

  getListData(): Observable<Page[]>{
      return this.http.get<Page[]>(this.data_api+"trending/movie/day?"+this.api_key)
  }

  getDetailData(id:number): Observable<Movie>{
     return this.http.get<Movie>(this.data_api+"movie/"+id+"?"+this.api_key)
  }

  getSearchByQuery(query: string | null | undefined): Observable<Page[]>{
     return this.http.get<Page[]>(this.data_api+"search/movie?query="+query+"&"+this.api_key)
  }
}