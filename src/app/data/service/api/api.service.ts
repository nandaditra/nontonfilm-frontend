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
  dataApi : string = "https://api.themoviedb.org/3/trending/movie/day?api_key=b41c95c7bee406c6d3cc0151c57dd295"

  constructor(private http: HttpClient) { }

  getListData(): Observable<Page[]>{
      return this.http.get<Page[]>(this.dataApi)
  }
}