import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: SignupViewModel = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit() {
  }

  Signup(): void {
    this.apiService.signUp(this.model).subscribe(
      res => {
        this.router.navigate(['/start']);
      },
      err => {
        this.router.navigate(['/start']);
      }
    );
  }

}

export interface SignupViewModel {
  username: string;
  password: string;
}
