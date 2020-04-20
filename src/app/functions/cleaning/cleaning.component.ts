import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {FunctionsDialogComponent} from "../functions-dialog/functions-dialog.component";

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public cleaning() {
    this.dialog.open(FunctionsDialogComponent)
}

  ngOnInit() {
  }

}
