import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {OptionsDialogComponent} from "./options-dialog/options-dialog.component";
import {ApiServiceService} from "../shared/api-service.service";
import {Dish} from "../models/dish";
import {Options} from "../models/options";
import {opinions} from "../receipe-details/opinions/opinions";
import {not} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  options: Options;

  model: OptionViewModel = {
    language: '',
    country: '',
    voiceLevel: 0,
    screenBright: 0,
    sysMeter: ''
  };

  constructor( public dialog: MatDialog, private apiService: ApiServiceService) { }

  public startAct() {
    this.dialog.open(OptionsDialogComponent);
  }

  ngOnInit() {
    this.getOptions();
  }

  public getOptions() {
    this.apiService.getOptions().subscribe(
      res => {
        this.options = res;
      },
      error => {
        alert('error has occured list options');
      }
    );
  }

  setOptions(): void {
    console.log(Object.values(this.model.language));
    if(this.model.language.length==0) this.model.language = this.options.language;
    if(this.model.country.length==0) this.model.country = this.options.country;
    if(this.model.voiceLevel==0) this.model.voiceLevel = this.options.voiceLevel;
    if(this.model.screenBright==0) this.model.screenBright = this.options.screenBright;
    if(this.model.sysMeter.length==0) this.model.sysMeter = this.options.sysMeter;
    this.apiService.setOptions(this.model).subscribe(
      res => {
        location.reload();
        console.log((this.model));
      },
      err => {
        alert('uzupełnij wszystkie pola');
      }
    );
  }

}

export interface OptionViewModel {
  language: string;
  country: string;
  voiceLevel: number;
  screenBright: number;
  sysMeter: string;
}
