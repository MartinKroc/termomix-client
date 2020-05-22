import { Component, OnInit } from '@angular/core';
import {receipes} from "./receipes";
import {ApiServiceService} from "../shared/api-service.service";
import {Dish} from "../models/dish";

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  term;
  //receipes = receipes;

  dishes: Dish[] = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getDishes();
  }

  public getDishes() {
    this.apiService.getAllDishes().subscribe(
      res => {
        this.dishes = res;
      },
      error => {
        alert('error has occured list dishes');
      }
    );
  }

}
