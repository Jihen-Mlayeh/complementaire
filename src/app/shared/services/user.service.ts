import { Injectable } from '@angular/core';
import { User } from '../modele/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

users:User[]=[]
  constructor() { 
    this.users=this.getUsers();
  }
  addUser(user:User){
    this.users.push(user)
    localStorage.setItem('users',JSON.stringify(this.users))
  }
  getUsers(){
    return JSON.parse(localStorage.getItem('users')||'[]')

  }
  deleteUser(index:number){
    this.users=this.getUsers();
    this.users.splice(index,1)
    localStorage.setItem('users',JSON.stringify(this.users))

  }
  updateUser(user:User,index:number){
    this.users=this.getUsers();
    this.users[index]=user;
    localStorage.setItem('users',JSON.stringify(this.users));
  }
  
  getOneUser(index:number){
    this.users=this.getUsers();
    return this.users[index] 
   }
   authUser(email:string,password:string){

    this.users=this.getUsers();
    //let user=this.users.find(user=>user.email==email && user.password==password)
    let index=this.users.findIndex(user=>user.email==email && user.password==password)
    let user=this.users[index]
    if(user){
      localStorage.setItem("currentUser",JSON.stringify(index));
      return user 
    }
    return null


   }

}
