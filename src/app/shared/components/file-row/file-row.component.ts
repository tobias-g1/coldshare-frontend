import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-file-row',
  templateUrl: './file-row.component.html',
  styleUrls: ['./file-row.component.scss']
})
export class FileRowComponent {

  showShareModal = false;
  showCodeModal = false;
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService) {

  }

  toggleCodeModal() {
    this.showCodeModal = !this.showCodeModal;
  }

  toggleShareModal() {
    this.showShareModal = !this.showShareModal;
  }

  showDeleteConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you want to delete this file?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () => {

      }
    });
  }

}
