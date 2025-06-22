import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../services/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-recipe',
  imports: [Header,Footer,RouterLink],
  templateUrl: './saved-recipe.html',
  styleUrl: './saved-recipe.css'
})
export class SavedRecipe {

  allRecipes:any=[]
  constructor(private api:Api){}

  ngOnInit(){
    this.getAllSavedRecipes();
  }
  getAllSavedRecipes(){
    this.api.getSavedRecipesApi().subscribe((res:any)=>{
      console.log("User saved recipes")
      console.log(res)
      this.allRecipes=res
    })
  }

  deleteRecipe(id:any){
    this.api.removeSavedRecipeApi(id).subscribe((res)=>{
      this.getAllSavedRecipes()
    })
  }

}
