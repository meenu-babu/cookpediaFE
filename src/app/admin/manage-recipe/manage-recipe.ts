import { Component } from '@angular/core';
import { RecipeModel } from '../models/recipeModel';

@Component({
  selector: 'app-manage-recipe',
  standalone: false,
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css'
})
export class ManageRecipe {
  recipeDetails: RecipeModel = {};
  ingrediants: any = []
  instructions:any=[]
  AddRecipe() {
    console.log("Add recipe details:")
    console.log(this.recipeDetails)

  }

  addIngredients(data: any) {
    if (data.value) {
      this.ingrediants.push(data.value);
      data.value = "";
      console.log("Ingrediants")
      console.log(this.ingrediants)

    }
  }

  removeIngrediant(value:string){
    this.ingrediants=this.ingrediants.filter((item:string)=>{
      return item!==value
    })
  }

  addInstructions(data: any) {
    if (data.value) {
      this.instructions.push(data.value);
      data.value = "";
      console.log("Instructions")
      console.log(this.instructions)

    }
  }

  removeInstructions(value:string){
    this.instructions=this.instructions.filter((item:string)=>{
      return item!==value
    })
  }
}
