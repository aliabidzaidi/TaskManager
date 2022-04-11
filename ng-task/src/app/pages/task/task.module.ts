import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  imports: [
    CommonModule,
    NzTableModule,    
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
    NzSelectModule,
    FormsModule,
    NzFormModule,
    NzCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzInputModule,
  ],
  declarations: [TaskComponent],
  exports: [TaskComponent]
})
export class TaskModule { }
