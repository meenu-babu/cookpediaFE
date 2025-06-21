import { Component } from '@angular/core';
import { Api } from '../services/api';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipe',
  imports: [Header, Footer,SearchPipe,FormsModule, NgxPaginationModule],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {
  allRecipes: any = [];
  allRecipesDummy: any = [];
  cuisineArray: any = [];
  mealsArray: any = [];
searchKey:string=''

 p: number = 1;


  constructor(private api: Api) {}

  //ngOnInit() is a angular hook,it excecuted once after the component initialised
  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.api.getAllRecipesApi().subscribe((res: any) => {
      console.log('All recipes in recipe page');
      console.log(res);
      this.allRecipes = res;
      this.allRecipesDummy = res;
      this.allRecipes.forEach((item: any) => {
        !this.cuisineArray.includes(item.cuisine) && //checking if there exist that particular cuisine item in cuisineArray
          this.cuisineArray.push(item.cuisine);
      });
      console.log('all cuisins');
      console.log(this.cuisineArray);

      //create mealsArray
      this.allRecipes.forEach((item: any) => {
        let tempMeal = item.mealType; //['Lunch', 'Dinner']
        if (tempMeal && tempMeal.length > 0) {
          tempMeal.forEach((meal: any) => {
            !this.mealsArray.includes(meal) && this.mealsArray.push(meal);
          });
        }
      });
      console.log('Meals Array');
      console.log(this.mealsArray);
    });
  }

  filterAllRecipes(value: string) {
    //alert(value)
    this.allRecipes = this.allRecipesDummy.filter((item: any) =>
      item['cuisine'].includes(value)
    );
  }


 filterByMealType(value:string){
  this.allRecipes = this.allRecipesDummy.filter((item: any) =>
      item['mealType'].includes(value)
    );

 }

 getAllItems(){
  this.allRecipes=this.allRecipesDummy;
 }
}
