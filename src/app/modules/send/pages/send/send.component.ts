import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { FileService } from 'src/app/core/services/file/file.service';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { File } from 'src/app/shared/models/file.model';
import { UploadResponse } from '../../../../../../.history/src/app/shared/models/file.model_20230605123646';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent {

  header: string = 'Send A File';
  description: string = 'Send files securely and effortlessly. Share your documents, images, videos, and more with just a few clicks. Enjoy peace of mind knowing that your files are encrypted and protected during transit. Simplify file sharing and collaboration with our user-friendly platform. Start sending files today!';
  uploadUrl: string = environment.base + '/files/upload'
  fileList: NzUploadFile[] = [];
  uploadResponse: UploadResponse = null;
  shareCode: string = null;
  showCodeModal = false;

  constructor(private messageService: NzMessageService, private fileService: FileService) { }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    this.fileList = fileList.filter((file) => {
      if (file.status === 'done' || file.status === 'error') {

        if (file.status === 'done') {
          this.uploadResponse = file.response;
          this.shareCode = this.uploadResponse?.pinCodes[0].pinCode;
          this.toggleCodeModal();
        }

        this.fileList = [];
        return false;

      }
      return true;
    });
  }

  toggleCodeModal() {
    this.showCodeModal = !this.showCodeModal;
  }

  handleClose() {
    this.fileList = [];
    this.toggleCodeModal();
    this.uploadResponse = null;
  }


}
