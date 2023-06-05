import { Component, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FileService } from 'src/app/core/services/file/file.service';
import { MetaMaskService } from 'src/app/core/services/metamask/metamask.service';
import { File, PinCode } from '../../models/file.model';

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
  shareLink = '';
  shareCode = '';

  constructor(
    private modal: NzModalService,
    public MetaMaskService: MetaMaskService,
    public fileService: FileService
  ) {

  }

  isOwner(): boolean {
    let selectedAddress: string;
    this.MetaMaskService.selectedAddress$.subscribe((address: string) => {
      selectedAddress = address;
    });

    return (selectedAddress) ? this.file?.owner.address === selectedAddress : false;
  }


  toggleCodeModal() {
    this.showCodeModal = !this.showCodeModal;
  }

  toggleShareModal() {
    this.showShareModal = !this.showShareModal;
  }

  launchCodeModal() {
    this.fileService.getShareCode(this.file._id).subscribe(res => {
      this.shareCode = res.pinCode;
      this.toggleCodeModal();
    })
  }

  launchShareModal() {
    this.fileService.getShareLink(this.file._id).subscribe((res) => {
      this.shareLink = window.location.host + '/transfer/' + res.link;
      console.log(this.shareLink)
      this.toggleShareModal();
    })
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
