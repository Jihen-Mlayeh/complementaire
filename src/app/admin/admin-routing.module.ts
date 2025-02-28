import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path:'',redirectTo:'acceuil',pathMatch:'full'

  },

  
  { path: '', component: AdminComponent,

    children:[
      {
        path:"acceuil",component:AcceuilComponent
      },
      {
        path:"utilisateur",component:UsersComponent
      },
      {
        path:"tasks",component:TasksComponent
      }
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
