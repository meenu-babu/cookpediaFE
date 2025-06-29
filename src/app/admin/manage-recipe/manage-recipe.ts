import { Component, Input } from '@angular/core';
import { RecipeModel } from '../models/recipeModel';
import { Api } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-recipe',
  standalone: false,
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css'
})
export class ManageRecipe {
  @Input() id!: string
  recipeDetails: RecipeModel = {};
  ingrediants: any = []
  instructions: any = [];
  mealsArray: any = [];
  mealTypeArray: any = [];
  constructor(private api: Api, private router: Router) { }
  ngOnInit() {
    if (this.id) {
      this.getAllRecipes()
    }
    this.mealTypeArray = ['Dinner', 'Lunch', 'Snack', 'Dessert', 'Appetizer', 'Breakfast', 'Beverage', 'Salad']
  }

  getAllRecipes() {
    this.api.getAllRecipesApi().subscribe((res: any) => {
      if (this.id) {
        this.recipeDetails = res.find((item: any) => item._id = this.id);
        this.ingrediants = this.recipeDetails.ingredients;
        this.instructions = this.recipeDetails.instructions
        this.mealTypeArray = this.recipeDetails.mealType
      }

      const dummyMeal = res.map((item: any) => item.mealType)
      //console.log(dummyMeal.flat(Infinity));
      const flatDummyArray = dummyMeal.flat(Infinity)
      flatDummyArray.forEach((item: any) => {
        !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)
      })
    })
  }

  AddRecipe() {
    console.log("Add recipe details:")
    console.log(this.recipeDetails)
    this.recipeDetails.ingredients = this.ingrediants;
    this.recipeDetails.instructions = this.instructions;
    this.recipeDetails.mealType = this.mealsArray;
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = this.recipeDetails;
    if (name && ingredients!.length > 0 && instructions!.length > 0 && prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && caloriesPerServing && image && mealType!.length > 0) {
      //call add recipe Api
      this.api.addRecipeApi(this.recipeDetails).subscribe((res) => {
        alert(`${this.recipeDetails.name} added successfully`)
        this.recipeDetails = {}
        this.ingrediants = [];
        this.instructions = [];
        this.mealsArray = [];
        this.router.navigateByUrl('/admin/recipe-list')

      })

    }

  }

  addIngredients(data: any) {
    if (data.value) {
      this.ingrediants.push(data.value);
      data.value = "";
      console.log("Ingrediants")
      console.log(this.ingrediants)

    }
  }

  removeIngrediant(value: string) {
    this.ingrediants = this.ingrediants.filter((item: string) => {
      return item !== value
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

  removeInstructions(value: string) {
    this.instructions = this.instructions.filter((item: string) => {
      return item !== value
    })
  }

  mealTypeSelect(event: any) {
    if (event.target.checked) {
      this.mealsArray.push(event.target.name)
    }
    else {
      this.mealsArray = this.mealsArray.filter((item: any) => {
        return item !== event.target.name
      })
    }
    console.log(this.mealsArray)
  }

  updateRecipe() {
    console.log("Update recipe details:")
    console.log(this.recipeDetails)
    this.recipeDetails.ingredients = this.ingrediants;
    this.recipeDetails.instructions = this.instructions;
    this.recipeDetails.mealType = this.mealsArray;
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = this.recipeDetails;
    if (name && ingredients!.length > 0 && instructions!.length > 0 && prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && caloriesPerServing && image && mealType!.length > 0) {
      this.api.editRecipeApi(this.id, this.recipeDetails).subscribe((res: any) => {
        alert("Recipe Update successfully");
        this.recipeDetails = {}
        this.ingrediants = [];
        this.instructions = [];
        this.mealsArray = [];
        this.router.navigateByUrl('/admin/recipe-list')
      })

    }

    else {
      alert("Please fill the form completely")

    }
  }
}
