import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent {

  header: string = 'Send A File';
  description: string = 'Send files securely and effortlessly. Share your documents, images, videos, and more with just a few clicks. Enjoy peace of mind knowing that your files are encrypted and protected during transit. Simplify file sharing and collaboration with our user-friendly platform. Start sending files today!';

  constructor(private msg: NzMessageService) { }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
