import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../components/register/register.component';


@NgModule({
  declarations: [
    AdminComponent,
    AcceuilComponent,
    TasksComponent,
    UsersComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RegisterComponent
  ]
})
export class AdminModule { }
