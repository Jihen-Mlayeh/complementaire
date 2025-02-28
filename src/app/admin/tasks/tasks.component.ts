import { Component } from '@angular/core';
import { Task } from '../../shared/modele/task';
import { TaskService } from '../../shared/services/task.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  task={} as Task
  tasks:Task[]=[];
  grade="";
  constructor(private taskService:TaskService, private userService:UserService){
    this.tasks=taskService.getTasks();
    let current=this.userService.getOneUser(Number(localStorage.getItem("currentUser")))
    this.grade=current.role;
  }
  delete(id:number){
    if(confirm("Are you sure to delete this task")){
      this.taskService.deleteTask(id)
      this.tasks=this.taskService.getTasks()
    }
  }
  add(){
    console.log(this.task)
    this.taskService.addTask(this.task)
    this.taskService.getTasks();

    
  }

}
