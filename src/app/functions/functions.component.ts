import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  tempup: number = 0;
  s: number = 0;
  m: number = 0;
  h: number = 0;
  o: number = 0;
  timeoutHandler;

  constructor() {
    this.tempup = 60;
    this.s = 0;
    this.m = 0;
    this.h = 0;
    this.o = 10;
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown() {
    this.timeoutHandler = setInterval(() => {
      if(this.tempup<=239)
      this.tempup += 1;
    }, 50);
  }

  public mousedowndel() {
    this.timeoutHandler = setInterval(() => {
      if(this.tempup>=31)
      this.tempup -= 1;
    }, 50);
  }




  public mousedownh() {
    this.timeoutHandler = setInterval(() => {
      if(this.h<=23)
      this.h += 1;
    }, 50);
  }

  public mousedowndelh() {
    this.timeoutHandler = setInterval(() => {
      if(this.h>=1)
      this.h -= 1;
    }, 50);
  }

  public mousedownm() {
    this.timeoutHandler = setInterval(() => {
      if(this.m<=59)
      this.m += 1;
    }, 50);
  }

  public mousedowndelm() {
    this.timeoutHandler = setInterval(() => {
      if(this.m>=1)
      this.m -= 1;
    }, 50);
  }

  public mousedowns() {
    this.timeoutHandler = setInterval(() => {
      if(this.s<=59)
      this.s += 1;
    }, 50);
  }

  public mousedowndels() {
    this.timeoutHandler = setInterval(() => {
      if(this.s>=1)
      this.s -= 1;
    }, 50);
  }

  public mousedowno() {
    this.timeoutHandler = setInterval(() => {
      if(this.o<=390)
      this.o += 10;
    }, 50);
  }

  public mousedowndelo() {
    this.timeoutHandler = setInterval(() => {
      if(this.o>0)
      this.o -= 10;
    }, 50);
  }

  ngOnInit() {
  }

}
