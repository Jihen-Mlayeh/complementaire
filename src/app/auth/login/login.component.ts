import { Component } from '@angular/core';
import { User } from '../../shared/modele/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user={} as User 
  constructor(private userService:UserService){
    
  }
  login(){
   
    console.log(this.user);

    let user=this.userService.authUser(this.user.email,this.user.password)
    if(user){
      console.log("login success")
      window.location.href="../admin"
    }
    else{
      console.log("login failed")
    }
  }

}
