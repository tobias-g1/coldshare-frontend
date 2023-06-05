import { Component, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MetaMaskService } from 'src/app/core/services/metamask/metamask.service';
import { File } from '../../models/file.model';

@Component({
  selector: 'app-file-row',
  templateUrl: './file-row.component.html',
  styleUrls: ['./file-row.component.scss']
})
export class FileRowComponent {

  @Input() file: File = null;

  showShareModal = false;
  showCodeModal = false;
  confirmModal?: NzModalRef;

  constructor(
    private modal: NzModalService,
    public MetaMaskService: MetaMaskService
  ) {

  }

  isOwner(): boolean {
    let selectedAddress: string;
    this.MetaMaskService.selectedAddress$.subscribe((address: string) => {
      selectedAddress = address;
    });

    return this.file?.owner.address === selectedAddress;
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

  download() {
    const fileUrl = 'https://hackathon.s3.coldstack.io/' + this.file.bucket + this.file.name;
    window.open(fileUrl, '_blank');
  }

}
