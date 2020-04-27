import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material";

import {receipes} from "../receipes/receipes";
import {DetailsDialogComponent} from "./details-dialog/details-dialog.component";
import {opinions} from "./opinions/opinions";

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {

  receipe;
  showOpinions = false;
  opinions = opinions;

  constructor(
    private route: ActivatedRoute, public dialog: MatDialog
  ) {

  }

  public startCook() {
    this.dialog.open(DetailsDialogComponent);
}
  public showAlert() {
    alert("Wysłano opinie");
}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receipe = receipes[+params.get('receipeId')];
    });
  }

}
