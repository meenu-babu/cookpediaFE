import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../services/api';

@Component({
  selector: 'app-home',
  imports: [Header,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  allRecipes:any=[]
  constructor(private api:Api){}

  ngOnInit(){
    this.getAllRecipes()
  }
getAllRecipes(){
  this.api.getAllRecipesApi().subscribe((res:any)=>{
    console.log("All recipes in home page");
    console.log(res)
  })
}


}
