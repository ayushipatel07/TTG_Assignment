import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GetaquoteComponent } from './getaquote/getaquote.component';
import { BillingComponent } from './billing/billing.component';
import { CliamsComponent } from './cliams/cliams.component';
import { FindaagentComponent } from './findaagent/findaagent.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{
  path: 'home', component: HomeComponent
},
{
  path: 'register', component: RegisterComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'getaquote', component: GetaquoteComponent
},
{
  path: 'billing', component: BillingComponent
},
{
  path: 'claims', component: CliamsComponent
},
{
  path: 'findaagent', component: FindaagentComponent
},
{
  path: '', redirectTo: '/login',  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
