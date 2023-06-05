import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FileRowComponent } from './components/file-row/file-row.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ShareModelComponent } from './components/share-model/share-model.component';
import { CodeModalComponent } from './components/code-modal/code-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginModalComponent,
    PageHeaderComponent,
    FileRowComponent,
    ShareModelComponent,
    CodeModalComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzDropDownModule,
    FormsModule
  ],
  exports: [
    LoginModalComponent,
    PageHeaderComponent,
    FileRowComponent,
    ShareModelComponent,
    CodeModalComponent
  ]
})
export class SharedModule { }
