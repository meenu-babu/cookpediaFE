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

  
// add testimony
addTestimonyApi(reqBody:any){

  return this.http.post(`${this.server_url}/add-testimony`,reqBody)
  
}

// add user
registerApi(reqBody:any){
  return this.http.post(`${this.server_url}/register`,reqBody)
}

//login user
loginApi(reqBody:any){
  return this.http.post(`${this.server_url}/login`,reqBody)
}
}

