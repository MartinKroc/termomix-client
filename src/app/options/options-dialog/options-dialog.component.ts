import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css']
})
export class OptionsDialogComponent implements OnInit {

  showSpinner = false;
  showEnd = false;
  showAct = true;


  constructor() { }

  private showS() {
    this.showAct = false;
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.showEnd = true;
    },3000)
  }

  ngOnInit() {
  }

}
