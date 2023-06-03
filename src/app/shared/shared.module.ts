import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginModalComponent
  ]
})
export class SharedModule { }
