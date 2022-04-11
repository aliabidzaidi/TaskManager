import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';


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

  selectedValue = null;
  taskList!: any[];
  employeeList!: any[];
  taskCount = 0;
  isAddTask = false;
  validateForm!: FormGroup;
  isConfirmLoading = false;

  constructor(private taskService: TaskService, 
              private fb: FormBuilder,
              private message: NzMessageService) { }

  ngOnInit() {
    
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      datePickerTime: [null, [Validators.required]],
      employeeId: null
    });

    this.getTaskList();
    this.getEmployeeList();

  }

  submitForm(): void {
    this.isConfirmLoading = true;
    // console.log(this.validateForm.value);
    const formValues = this.validateForm.value;
    if(formValues.title && formValues.employeeId && formValues.datePickerTime){
      console.log(formValues);
      const req = {"title": formValues.title, "employee": {"id": formValues.employeeId}, 
                  "dateAssigned": formValues.datePickerTime, "dateCompleted": formValues.datePickerTime
                  }
      this.taskService.addTask(req).subscribe(
        (response)=>{
          console.log(response);
          this.message.success('Task Successfully added');
          this.validateForm.reset();
          this.isAddTask = false;
        },
        (error)=>{
          console.log(error);
          this.message.error(error.message);
        }
      );
    }
    this.isConfirmLoading = false;
  }

  showModal(): void {
    this.isAddTask = true;
  }


  // handleOk(): void {
  //   this.isConfirmLoading = true;
  //   setTimeout(() => {
  //     this.isAddTask = false;
  //     this.isConfirmLoading = false;
  //   }, 1000);
  // }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isAddTask = false;
  }

  // submitForm(): void {
  //   console.log(this.validateForm.value);
  // }


  getTaskList() {
    this.taskService.getTasks().subscribe(
      (response) => {
        // console.log(response);
        this.taskList = response;
        this.taskCount = response.count;

        // console.log(this.taskList)

      },
      (error) => {
        // console.log(error);
      },
    );
  }

  getTaskById(id: any) {

  }

  addTask() {

  }

  editTask() {

  }

  deleteTask() {

  }

  getEmployeeList() {

    this.taskService.getEmployees().subscribe(
      (response) => {
        console.log(response);
        this.employeeList = response;
      },
      (error) => {
        console.log(error);
      },
    );
  }

}
