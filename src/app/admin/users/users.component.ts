import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/modele/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:User[]=[]
  constructor(private userService:UserService){
    this.users=this.userService.getUsers()
  }
  delete(id:number){
    if(confirm("Are you sure to delete this user")){
      this.userService.deleteUser(id)
      this.users=this.userService.getUsers()
    }
  }

}
