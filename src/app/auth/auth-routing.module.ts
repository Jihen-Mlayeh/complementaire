import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  
  
  { path: '', component: AuthComponent ,
  
children:[
  {
    path:'login', component:LoginComponent},
    {path: 'registeration', component:RegistrationComponent},
  
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
