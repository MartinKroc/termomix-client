import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions-dialog',
  templateUrl: './functions-dialog.component.html',
  styleUrls: ['./functions-dialog.component.css']
})
export class FunctionsDialogComponent implements OnInit {

  showSpinner = false;
  showEnd = false;

  constructor() { }

  private showS() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.showEnd = true;
    },5000)
  }

  ngOnInit() {
  }

}
