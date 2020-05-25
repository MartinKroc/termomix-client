import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";
import {History} from "../models/history";
import {Dish} from "../models/dish";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  row: History[] = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getHistory();
  }

  public getHistory() {
    this.apiService.getUserDishes().subscribe(
      res => {
        this.row= res;
        console.log(this.row);
      },
      error => {
        alert('error has occured list history');
      }
    );
  }

}
