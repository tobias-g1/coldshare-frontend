import { Component, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FileService } from 'src/app/core/services/file/file.service';
import { MetaMaskService } from 'src/app/core/services/metamask/metamask.service';
import { File, PinCode } from '../../models/file.model';
import { format } from 'date-fns';

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
    const fileUrl = `https://${this.file.bucket}.s3.coldstack.io/` + this.file.key;
    window.open(fileUrl, '_blank');
  }

  getFileIcon(fileFormat: string): string {
    const format = fileFormat.toLowerCase();

    switch (format) {
      case 'image/png':
        return 'assets/img/file-icons/png.png';
      case 'image/jpeg':
      case 'image/jpg':
        return 'assets/img/file-icons/jpg.png';
      case 'application/pdf':
        return 'assets/img/file-icons/pdf.png';
      case 'application/vnd.ms-powerpoint':
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        return 'assets/img/file-icons/ppt.png';
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      case 'application/vnd.ms-excel':
        return 'assets/img/file-icons/xls.png';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'assets/img/file-icons/doc.png';
      case 'audio/mpeg':
        return 'assets/img/file-icons/mp3.png';
      case 'video/mp4':
      case 'video/webm':
        return 'assets/img/file-icons/video.png';
      case 'text/javascript':
      case 'application/javascript':
      case 'text/typescript':
      case 'application/typescript':
        return 'assets/img/file-icons/code.png';
      case 'application/css':
        return 'assets/img/file-icons/css.png';
      case 'text/html':
        return 'assets/img/file-icons/html.png';
      case 'image/gif':
        return 'assets/img/file-icons/gif.png';
      case 'video/avi':
        return 'assets/img/file-icons/avi.png';
      case 'application/zip':
        return 'assets/img/file-icons/zip.png';
      default:
        if (format.includes('music')) {
          return 'assets/img/file-icons/music.png';
        } else if (format.includes('video')) {
          return 'assets/img/file-icons/video.png';
        } else if (format.includes('code')) {
          return 'assets/img/file-icons/code.png';
        } else if (format.includes('picture') || format.includes('image')) {
          return 'assets/img/file-icons/picture.png';
        } else {
          return 'assets/img/file-icons/unknown.png';
        }
    }
  }

  getFormattedDate() {
    const createdAtDate = new Date(this.file.createdAt);
    return format(createdAtDate, 'MMM dd, yyyy');
  }

}
