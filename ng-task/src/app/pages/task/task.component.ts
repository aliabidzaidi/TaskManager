import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';


// interface Employee{
//   id: number;
//   name: string;
//   gender: string;
//   dateOfBirth: string;
// }

interface Task {
  id: number;
  title: string;
  dateAssigned: number;
  dateCompleted: string;
  // employee: Employee;
  employeeName: string;
  employeeId: number
}



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // listOfData: Person[] = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park'
  //   }
  // ];

  taskList!: any[];
  taskCount = 0;
  isAddTask = false;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.getTaskList();
    this.getEmployeeList();
  }
  

  showModal(): void {
    this.isAddTask = true;
  }

  
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isAddTask = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isAddTask = false;
  }
  
  getTaskList() {
    this.taskService.getTasks().subscribe(
      (response) => {
        // console.log(response);
        this.taskList = response;
        this.taskCount = response.count;

        // console.log(this.taskList)


        // TODO: Map
      },
      (error) => {
        // console.log(error);
      },
    );
  }

  getTaskById(id: any){

  }

  addTask(){

  }

  editTask(){

  }

  deleteTask(){
    
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
