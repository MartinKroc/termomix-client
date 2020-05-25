import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";
import {SignupViewModel} from "../sign-up/sign-up.component";
import {Dish} from "../models/dish";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  showEdit = false;
  currEdit = 0;

  model: DishViewModel = {
    id: 0,
  name: '',
  photo: '',
  price: '',
  cookingTime: '',
  avgMark: '',
  ingredients: '',
  nvalues: '',
  preparing: '',
  categoryRaw: '',
  difficultyRaw: ''
  };

  modelupdate: DishViewModel = {
    id: 0,
    name: '',
    photo: '',
    price: '',
    cookingTime: '',
    avgMark: '',
    ingredients: '',
    nvalues: '',
    preparing: '',
    categoryRaw: '',
    difficultyRaw: ''
  };

  dishes: Dish[] = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getDishes();
  }

  addDish(): void {
    this.apiService.addDish(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error while adding dish');
      }
    );
  }

  updateDish(id): void {
    console.log(this.modelupdate);
    this.apiService.updateDish(this.modelupdate,id).subscribe(
      res => {
        location.reload();
      },
      err => {
        location.reload();
      }
    );
  }

  deleteDish(id): void {
    this.apiService.deleteDish(id).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('błąd, danie zostało już przypisane do użytkownika');
        location.reload();
      }
    );
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

export interface DishViewModel {
  id: number;
  name: string;
  photo: string;
  price: string;
  cookingTime: string;
  avgMark: string;
  ingredients: string;
  nvalues: string;
  preparing: string;
  categoryRaw: string;
  difficultyRaw: string;
}
