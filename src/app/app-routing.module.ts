import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { EventComponent } from './module/event/event.component';

// two different pages are implemented. One is our startup page (home) for searching,
// other one is to display list of events for particular artist

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'event/:name', // I have passed artist name parameter to the event. Route will be http://localhost:4200/event/{name}
    component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
