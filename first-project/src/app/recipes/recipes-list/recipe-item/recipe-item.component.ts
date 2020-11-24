import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<void>();


  /**
   * ! if we use strict mode we need to initialize recipe
   *  https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656142#questions/13160550
   */
  @Input() recipe = {
    name: '',
    description: '',
    imagePath: ''
  };

  constructor() { }

  ngOnInit(): void {

  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
