import { Component } from '@angular/core';
import { User } from '../../shared/modele/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-acceuil',
  standalone: false,
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
   user:User={} as User;
    
    constructor(private userService:UserService){
  
      this.user=this.userService.getOneUser(Number(localStorage.getItem('currentUser')));
    
    }
    update(){
      let id=Number(localStorage.getItem('currentUser'))
      this.userService.updateUser(this.user,id)
    }

}
