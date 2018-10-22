import {Component, OnInit, NgModule, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =  [

    new Recipe('TestRecipe','desc','https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg'),
    new Recipe('TestRecipe','desc','https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg')
  ];
recipewasSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){


  }

}
