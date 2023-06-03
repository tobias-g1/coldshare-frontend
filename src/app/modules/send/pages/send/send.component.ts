import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent {

  header: string = 'Send Files';
  description: string = '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur dignissimos sint voluptat doloremque dolores recusandae illum voluptas ut nesciunt perspiciatis consequatur at et, ducimus repellenduscorporis iusto eaque omnis?'

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
