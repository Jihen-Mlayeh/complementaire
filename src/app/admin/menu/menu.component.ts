import { Component } from '@angular/core';
import { User } from '../../shared/modele/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  current:User={} as User;
  grade="";
  constructor(private userService:UserService){

    this.current=this.userService.getOneUser(Number(localStorage.getItem('currentUser')));
    this.grade=this.current.role;
  }
  disconnect(){
    localStorage.removeItem("currentUser");
    window.location.href="../login"
  }

}
