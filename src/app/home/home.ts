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
  allFeedbacks:any=[]
item: any;
  constructor(private api:Api){}

  //ngOnInit() is a angular hook,it excecuted once after the component initialised
  ngOnInit(){
    this.getAllRecipes()
    this.getAllFeedbacks()
  }
getAllRecipes(){
  this.api.getAllRecipesApi().subscribe((res:any)=>{
    console.log("All recipes in home page");
    console.log(res)
    this.allRecipes=res.slice(0,6)
  })
}


getAllFeedbacks(){
  this.api.getApprovedFeedbackApi().subscribe((res:any)=>{
    console.log("All approved feedback")
    console.log(res)
    this.allFeedbacks=res;
  })
}
}
