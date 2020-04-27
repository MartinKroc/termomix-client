import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {OptionsDialogComponent} from "./options-dialog/options-dialog.component";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  public startAct() {
    this.dialog.open(OptionsDialogComponent);
  }

  ngOnInit() {
  }

}
