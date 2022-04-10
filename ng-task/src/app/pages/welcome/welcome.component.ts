import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  taskList!: [];
  taskCount = 0;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.getTaskList();
    this.getEmployeeList();
  }

  
  getTaskList() {
    this.taskService.getTasks().subscribe(
      (response) => {
        console.log(response);
        this.taskList = response.data;
        this.taskCount = response.count;
      },
      (error) => {
        // console.log(error);
      },
    );
  }

  getEmployeeList(){
    
    this.taskService.getEmployees().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }

}
