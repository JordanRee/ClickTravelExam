import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketsListComponent } from './main/tickets-list/tickets-list.component';

const routes: Routes = [
  { path: 'tickets/:code', component: TicketsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
