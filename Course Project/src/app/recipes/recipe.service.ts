import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Roasted Chicken',
      'super dish',
      'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Oil', 5)
      ]),
    new Recipe(
      'Chicken with Smashed Potato',
      'Fitness menü',
      'https://d3ur40406gizl1.cloudfront.net/web_site/images/v2/plates/4.png',
      [
        new Ingredient('Chichen', 1),
        new Ingredient('Potato', 5)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
