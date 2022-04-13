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

  selectedValue = { label: '', value: '' };
  taskList: any = [];
  employeeList: any = [];
  taskCount = 0;
  isModalOpen = false;
  validateForm!: FormGroup;
  isConfirmLoading = false;
  isConfirmAddLoading = false;
  isEdit = false;
  editedTask: any;

  constructor(private taskService: TaskService,
    private fb: FormBuilder,
    private message: NzMessageService) { }

  ngOnInit() {

    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      datePickerTime: [null, [Validators.required]],
      employeeId: [null, [Validators.required]]
    });

    this.getTaskList();
    this.getEmployeeList();
  }

  submitForm(): void {
    this.isConfirmAddLoading = true;
    // console.log(this.validateForm.value);
    const formValues = this.validateForm.value;
    if (formValues.title && formValues.employeeId && formValues.datePickerTime) {
      console.log(formValues);
      const req = {
        "title": formValues.title, "employee": { "id": formValues.employeeId },
        "dateAssigned": formValues.datePickerTime, "dateCompleted": formValues.datePickerTime
      }
      this.taskService.addTask(req).subscribe(
        (response) => {
          console.log(response);
          this.message.success('Task Successfully added');
          this.validateForm.reset();
          this.isModalOpen = false;
          this.getTaskList();
        },
        (error) => {
          console.log(error);
          this.message.error(error.message);
        }
      );
    }
    this.isConfirmAddLoading = false;
  }

  showModal(): void {
    this.isModalOpen = true;
  }


  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isModalOpen = false;
    this.validateForm.reset();
  }


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

  editTask(id: any) {
    this.isEdit = true;
    this.isModalOpen = true;
    this.editedTask = this.taskList.filter((t: any) => t.id == id)[0];
    // this.selectedValue = {label: this.editedTask.employee.name, value: this.editedTask.employee.id};
    this.selectedValue = this.editedTask.employee.name;
    // console.log(this.selectedValue.name);
    this.validateForm.setValue({
      'title': this.editedTask.title,
      'datePickerTime': this.editedTask.dateAssigned,
      'employeeId': { 'label': this.editedTask.employee.name, 'value': this.editedTask.employee.id }
    });
    console.log(this.validateForm.value);
  }

  submitEdit() {
    this.isConfirmLoading = true;
    const formValues = this.validateForm.value;
    if (formValues.title && this.selectedValue && formValues.datePickerTime) {
      // console.log(formValues);
      // const req = {"title": formValues.title, "employee": {"id": formValues.employeeId}, 
      //             "dateAssigned": formValues.datePickerTime, "dateCompleted": formValues.datePickerTime
      //             }

      this.editedTask["dateAssigned"] = formValues.datePickerTime;
      this.editedTask["title"] = formValues.title;

      this.taskService.editTask(this.editedTask).subscribe(
        (response) => {
          console.log(response);
          this.message.success('Task Successfully edited');
          this.validateForm.reset();
          this.isModalOpen = false;
          this.getTaskList();
        },
        (error) => {
          console.log(error);
          this.message.error(error.message);
        }
      );

      this.isEdit = false;
      this.validateForm.reset();
      this.editedTask = {};
      this.isConfirmLoading = false;

    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      (response) => {
        this.taskList = this.taskList.filter((t: any) => t["id"] != id);
        this.message.success('Task Successfully Deleted');
      },
      (error) => {
        console.log(error);
        this.message.success('Task could not be Deleted, error');

      },
    );

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
