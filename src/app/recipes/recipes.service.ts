import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Butter Chicken',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/1280px-Chicken_makhani.jpg',
      ingredients: ['Chicken', 'Butter', 'Masala'],
    },
    {
      id: 'r2',
      title: 'Butter Mutton',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Bengali_Mutton_Curry.JPG/330px-Bengali_Mutton_Curry.JPG',
      ingredients: ['Mutton', 'Butter', 'Masala'],
    },
  ];
  constructor() {}
  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe=>{
      return recipe.id === recipeId;
    })}
  }
}
