import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";

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

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  }

  Signup(): void {
    this.apiService.signUp(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error while register user');
      }
    );
  }

}

export interface SignupViewModel {
  username: string;
  password: string;
}
