import { Component } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  allRecipes: any = []
  searchKey: string = ''
  constructor(private api: Api) { }
  ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipesApi().subscribe((res: any) => {
      console.log(res);
      this.allRecipes = res;
    })
  }
  removeRecipe(id: any) {
    this.api.deleteRecipeApi(id).subscribe((res: any) => {
      this.getAllRecipes()
    })

  }
}
