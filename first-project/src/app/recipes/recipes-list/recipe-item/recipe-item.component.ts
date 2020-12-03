import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

  /**
   * ! if we use strict mode we need to initialize recipe
   *  https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656142#questions/13160550
   */
  @Input() recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: []
  };

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
