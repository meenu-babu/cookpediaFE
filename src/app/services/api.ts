import { HttpClient, HttpHeaders } from '@angular/common/http';
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



//common function to append token
appendToken(){
  //create an object of httpheaders class
  let headers=new HttpHeaders();
  const token=sessionStorage.getItem('token');
  if(token){
    headers=headers.append("Authorization",`Bearer ${token}`)
  }
  return {headers}

}


//get recipe details
viewRecipeApi(recipeId:any){
  return this.http.get(`${this.server_url}/recipe/${recipeId}/view`)
}

//get related recipes
getRelatedRecipeApi(type:string){
  return this.http.get(`${this.server_url}/related-recipe?cuisine=${type}`,this.appendToken())
}

// update download recipe count
downloadRecipeApi(recipeId:string,reqBody:any){
  return this.http.post(`${this.server_url}/recipe/${recipeId}/download`,reqBody,this.appendToken())
}


// save recipe to collection
saveRecipeApi(recipeId:string,reqBody:any){
  return this.http.post(`${this.server_url}/recipe/${recipeId}/save`,reqBody,this.appendToken())
}

// get user saved recipes
getSavedRecipesApi(){
  return this.http.get(`${this.server_url}/get-saved-recipes`,this.appendToken())
}

// delete saved recipe
removeSavedRecipeApi(id:string){
  return this.http.delete(`${this.server_url}/recipe/${id}/remove`,this.appendToken())
}


//upload profile pic
editUserApi(reqBody:any){
  return this.http.post(`${this.server_url}/user/edit`,reqBody,this.appendToken())
}

}

