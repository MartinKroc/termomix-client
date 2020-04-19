import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {receipes} from "../receipes/receipes";

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {

  receipe;

  constructor(private route: ActivatedRoute) {

  }

  public startCook() {
    alert("Rozpoczęto gotowanie")
}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.receipe = receipes[+params.get('receipeId')];
    });
  }

}
