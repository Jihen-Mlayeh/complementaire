import { Component } from '@angular/core';
import { User } from '../../shared/modele/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user={} as User;
constructor(private userService:UserService){


}
register(){
  console.log(this.user);
  this.userService.addUser(this.user)
}
}
