import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    // slice() make copy of array
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // need to emit because in getIngredients() we used slice()
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    /* for (let ingredient of ingredients) {
      this.addIngredient(ingredient)
    } */

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
