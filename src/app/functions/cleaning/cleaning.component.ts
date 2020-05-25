import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {FunctionsDialogComponent} from "../functions-dialog/functions-dialog.component";
import {ApiServiceService} from "../../shared/api-service.service";

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  resStat: string;

  constructor(public dialog: MatDialog, private apiService: ApiServiceService) { }

  public cleaning() {

    this.dialog.open(FunctionsDialogComponent);

    if(this.apiService.loggedIn()) {
      this.apiService.makeClean().subscribe(
        res => {
          this.resStat = res;
        },
        error => {
        }
      );
    }
}

  ngOnInit() {
  }
}
