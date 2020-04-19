import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  constructor() { }

  public cleaning() {
    alert("Rozpoczęto czyszczenie");
}

  ngOnInit() {
  }

}
