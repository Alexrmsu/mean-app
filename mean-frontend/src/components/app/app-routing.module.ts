import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {path: 'ui/dashboard', component: DashboardComponent},
  {path: 'ui/login', component: LoginComponent},
  {path: '**', redirectTo: 'ui/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
