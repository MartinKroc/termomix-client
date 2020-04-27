import { Component, OnInit } from '@angular/core';
import {opinions} from "./opinions";

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent implements OnInit {

  opinions = opinions;

  constructor() { }

  ngOnInit() {
    this.opinions = opinions;
  }

}
