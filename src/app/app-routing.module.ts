import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterCompanyComponent } from './features/register-company/register-company.component';
import { StockDashboardComponent } from './features/stock-dashboard/stock-dashboard.component';
import { StockDetailsComponent } from './features/stock-details/stock-details.component';

const routes: Routes = [
  {path:'login' , component: LoginComponent, pathMatch: 'full'},
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'register-company', component:RegisterCompanyComponent},
  {path: 'stockDetails',component:StockDetailsComponent},
  {path: 'dashboard', component:StockDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
