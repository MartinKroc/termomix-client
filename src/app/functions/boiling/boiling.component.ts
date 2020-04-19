import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boiling',
  templateUrl: './boiling.component.html',
  styleUrls: ['./boiling.component.css', '../functions.component.css']
})
export class BoilingComponent implements OnInit {

  temperature: number = 0;
  interval;

  constructor() {
    this.temperature=0;
  }

  public startBoiling() {
    this.interval = setInterval(() => {
      if(this.temperature >= 0) {
        this.temperature++;
      } else {
        this.temperature = 0;
      }
    },1000)
  }

  public stopBoiling() {
    clearInterval(this.interval);
  }

  ngOnInit() {
  }

}
