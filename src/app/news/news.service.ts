import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsList() {
    return this.http.get('https://next.json-generator.com/api/json/get/Ny1Q0CbK9');
  }
}
