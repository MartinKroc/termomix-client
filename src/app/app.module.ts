import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { FunctionsComponent } from './functions/functions.component';
import { OptionsComponent } from './options/options.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { ReceipeDetailsComponent } from './receipe-details/receipe-details.component';
import { WeightComponent } from './functions/weight/weight.component';
import { CleaningComponent } from './functions/cleaning/cleaning.component';
import { MixerComponent } from './functions/mixer/mixer.component';
import { BoilingComponent } from './functions/boiling/boiling.component';

const appRoutes: Routes = [
  {
    path: 'start',
    component: NavbarComponent
  },
  {
    path: 'receipes',
    component: ReceipesComponent
  },
  {
    path: 'functions',
    component: FunctionsComponent
  },
  {
    path: 'functions/weight',
    component: WeightComponent
  },
  {
    path: 'functions/mixer',
    component: MixerComponent
  },
  {
    path: 'functions/cleaning',
    component: CleaningComponent
  },
  {
    path: 'functions/boiling',
    component: BoilingComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'details',
    component: ReceipeDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    ReceipesComponent,
    FunctionsComponent,
    OptionsComponent,
    ReceipeDetailsComponent,
    WeightComponent,
    CleaningComponent,
    MixerComponent,
    BoilingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
