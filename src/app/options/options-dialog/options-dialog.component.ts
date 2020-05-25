import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../shared/api-service.service";

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css']
})
export class OptionsDialogComponent implements OnInit {

  showSpinner = false;
  showEnd = false;
  showAct = true;
  updateStatus: string;


  constructor(private apiService: ApiServiceService) { }

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
