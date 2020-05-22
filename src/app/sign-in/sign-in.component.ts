import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: SignInViewModel = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  }

  Signin(): void {
    this.apiService.signIn(this.model).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        location.reload();
      },
      err => {
        alert('error while login user');
      }
    );
  }

}

export interface SignInViewModel {
  username: string;
  password: string;
}
