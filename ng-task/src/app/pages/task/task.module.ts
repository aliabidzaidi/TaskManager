import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  imports: [
    CommonModule,
    NzTableModule,    
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
  ],
  declarations: [TaskComponent],
  exports: [TaskComponent]
})
export class TaskModule { }
