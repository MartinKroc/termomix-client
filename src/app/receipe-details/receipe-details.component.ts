import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material";

import {DetailsDialogComponent} from "./details-dialog/details-dialog.component";
import {opinions} from "./opinions/opinions";
import {ApiServiceService} from "../shared/api-service.service";
import {Opinion} from "../models/opinion";
import {History} from "../models/history";

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {

  receipe;
  showOpinions = false;

  opinion: Opinion[] = [];
  history: History;

  model: OpinionViewModel = {
    username: '',
  mark: '',
  content: '',
  dishId: 1
  };
  recNumb: number;

  constructor(
    private route: ActivatedRoute, public dialog: MatDialog, private apiService: ApiServiceService
  ) {

  }

  public startCook() {
    this.dialog.open(DetailsDialogComponent);

    if(this.apiService.loggedIn()) {
      let numb = this.recNumb;
      numb+=1;
      this.apiService.addToHistory(numb).subscribe(
        res => {
          this.history=res;
          console.log(res);
        },
        error => {
          alert('error has occured add dish to history');
        }
      );
    }
}
  public showAlert() {
    alert("Wysłano opinie");
}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getDish(params.get('receipeId'));
      this.getOpinions(params.get('receipeId'));
      this.recNumb = Number(params.get('receipeId'));
    });
  }

  public getDish(id) {
    let numb = Number(id);
    numb+=1;
    console.log(numb);
    this.apiService.getDishById(numb).subscribe(
      res => {
        this.receipe = res;
      },
      error => {
        alert('error has occured list dish');
      }
    );
  }

  public getOpinions(id) {
    let numb = Number(id);
    numb+=1;
    this.apiService.getOpinionsByDishId(numb).subscribe(
      res => {
        this.opinion = res;
      },
      error => {
        alert('error has occured list opinions');
      }
    );
  }

  addOpinion(): void {
    let numb = this.recNumb;
    numb+=1;
    this.model.dishId = numb;
    this.model.username = 'nevermind';
    console.log(this.model);
    this.apiService.addOpinion(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error while adding opinion');
      }
    );
  }

  public addToHistory() {

  }

}

export interface OpinionViewModel {
  username: string;
  mark: string;
  content: string;
  dishId: number;
}
