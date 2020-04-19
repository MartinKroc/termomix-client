import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.css', '../functions.component.css']
})
export class MixerComponent implements OnInit {

  timeoutHandler;
  o: number = 0;

  constructor() {
    this.o = 0;
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown() {
    this.timeoutHandler = setInterval(() => {
      if(this.o<=239)
        this.o += 10;
    }, 50);
  }

  public mousedowndel() {
    this.timeoutHandler = setInterval(() => {
      if(this.o>=10)
        this.o -= 10;
    }, 50);
  }

  public mixerAlert() {
    alert("Rozpoczęto miksowanie");
}

  public mixerAlertEnd() {
    alert("Zakończono miksowanie");
  }

  ngOnInit() {
  }

}
