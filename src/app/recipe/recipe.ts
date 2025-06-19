import { Component } from '@angular/core';
import { Api } from '../services/api';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-recipe',
  imports: [Header,Footer],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css'
})
export class Recipe {
  allRecipes:any=[]
  constructor(private api:Api){}


  //ngOnInit() is a angular hook,it excecuted once after the component initialised
  ngOnInit(){
    this.getAllRecipes()
  }


  getAllRecipes(){
     this.api.getAllRecipesApi().subscribe((res:any)=>{
    console.log("All recipes in recipe page");
    console.log(res);
    this.allRecipes=res;
    
  })
}

}
