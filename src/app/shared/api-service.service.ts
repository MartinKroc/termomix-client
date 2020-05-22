import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignupViewModel} from "../sign-up/sign-up.component";
import {Dish} from "../models/dish";
import {DishViewModel} from "../admin-panel/admin-panel.component";
import {Opinion} from "../models/opinion";
import {History} from "../models/history";
import {OpinionViewModel} from "../receipe-details/receipe-details.component";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private port = '8080';
  private BASE_URL = 'http://localhost:' + this.port;

  private SIGNUP_URL = this.BASE_URL + '/api/user/signup';
  private SIGNIN_URL = this.BASE_URL + '/api/user/signin';

  private DISH_URL = this.BASE_URL + '/api/dish';

  private HISTORY_URL = this.BASE_URL + '/api/user/history';

  private OPINION_URL = this.BASE_URL + '/api/opinion';

  constructor(private http: HttpClient, private router: Router) { }

  //AUTH
  signUp(user: SignupViewModel): Observable<any> {
    return this.http.post(this.SIGNUP_URL, user);
  }

  signIn(user: SignupViewModel): Observable<any> {
    return this.http.post(this.SIGNIN_URL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  //DISHES
  getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.DISH_URL);
  }

  getDishById(id): Observable<Dish> {
    return this.http.get<Dish>(this.DISH_URL + '/' + id);
  }

  addDish(dish: DishViewModel): Observable<any> {
    return this.http.post(this.DISH_URL, dish);
  }

  deleteDish(id) {
    return this.http.delete(this.DISH_URL + '/' + id);
  }

  updateDish(dish: DishViewModel, id): Observable<any> {
    return this.http.put(this.DISH_URL + '/' + id, dish);
  }
  //OPINIONS
  getOpinionsByDishId(id): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this.OPINION_URL + '/' + id);
  }

  addOpinion(opinion: OpinionViewModel): Observable<any> {
    return this.http.post(this.OPINION_URL, opinion);
  }

  //HISTORY
  getUserDishes(): Observable<History[]> {
    return this.http.get<History[]>(this.HISTORY_URL);
  }

  addToHistory(id): Observable<History> {
    return this.http.get<History>(this.HISTORY_URL + '/add/' + id);
  }
}
