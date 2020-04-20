import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent implements OnInit {

  showSpinner = false;
  showEnd = false;
  showA = true;

  @Input()
  canMark = false;

  constructor() { }

  private showS() {
    this.showA = false;
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.showEnd = true;
      this.canMark = true;
    },5000)
  }

  ngOnInit() {
  }

}
