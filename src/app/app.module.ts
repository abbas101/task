import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './module/event/event.component';
import { HeaderComponent } from './shared/layout/header/header.component';

// App module is used to register components used in this project
// For that, I have used Home, Header and Event component

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // This module is imported for HTTP calls
    ReactiveFormsModule, // This module is used because I have implemented search bar func using reactive forms
    AppRoutingModule // AppRouting module is included in imports for routing purpose
  ],
  providers: [],
  bootstrap: [AppComponent] // It indicates that our project starts from AppComponents
})
export class AppModule { }
