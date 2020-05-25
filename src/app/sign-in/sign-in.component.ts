import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";
import {Router} from "@angular/router";

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

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit() {
  }

  Signin(): void {
    this.apiService.signIn(this.model).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/start']);
      },
      err => {
        alert('zły login lub hasło');
      }
    );
  }

}

export interface SignInViewModel {
  username: string;
  password: string;
}
