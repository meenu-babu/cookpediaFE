import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {

  server_url="http://localhost:5000"

  constructor(private http:HttpClient) { }

  // get all recipes api
  getAllRecipesApi(){
    return this.http.get(`${this.server_url}/all-recipes`)
  }
}
