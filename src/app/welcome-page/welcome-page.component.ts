import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  time = new Date();

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
