import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsDialogComponent } from './receipe-details/details-dialog/details-dialog.component';

import {MatDialogModule, MatButtonModule, MatProgressSpinnerModule} from "@angular/material";
import { FunctionsDialogComponent } from './functions/functions-dialog/functions-dialog.component';

const appRoutes: Routes = [
  {
    path: 'start',
    component: NavbarComponent
  },
  {
    path: '',
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
    path: 'receipes/:receipeId',
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
    BoilingComponent,
    DetailsDialogComponent,
    FunctionsDialogComponent
  ],
  entryComponents: [DetailsDialogComponent, FunctionsDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
