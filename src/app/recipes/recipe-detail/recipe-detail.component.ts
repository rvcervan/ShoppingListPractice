import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRecipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    for(let i = 0; i < ingredients.length; i++){
      this.slService.addIngredient(ingredients[i]);
    }
  }

}
