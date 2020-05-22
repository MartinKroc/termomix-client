import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {ApiServiceService} from "./shared/api-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.apiService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
