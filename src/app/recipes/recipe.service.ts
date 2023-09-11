import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            "Cheese Cake", 
            "Yummy", 
            "https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg",
            [
                new Ingredient('cheese', 1),
                new Ingredient('cake', 2)
            ]),
        new Recipe(
            "Bobby", 
            "That boy ain't right.", 
            "https://s3.crackedcdn.com/phpimages/article/1/9/2/845192.jpg",
            [
                new Ingredient('chips', 30),
                new Ingredient('couch', 1),
                new Ingredient('Bobby', 1)
            ])
      ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}