import { Component, OnInit } from '@angular/core';
import {receipes} from "./receipes";

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  term;
  receipes = receipes;

  constructor() { }

  ngOnInit() {
  }

}
