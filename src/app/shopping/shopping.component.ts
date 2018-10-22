import { Component, OnInit } from '@angular/core';
import {  Ingredient} from './ingredient';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple' , 10),
    new Ingredient('Organes' , 20)
  ];

  constructor() { }

  ngOnInit() {
  }

}
