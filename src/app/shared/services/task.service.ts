import { Injectable } from '@angular/core';
import { Task } from '../modele/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { 
    this.tasks=this.getTasks();
  }
  tasks:Task[]=[]
  getTasks(){
    return JSON.parse(localStorage.getItem('tasks')|| '[]')
  }
  addTask(task:Task){
    this.tasks=this.getTasks();
    this.tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  deleteTask(index:number){
    this.tasks=this.getTasks();
    this.tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
    
  }
}
