import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-share-model',
  templateUrl: './share-model.component.html',
  styleUrls: ['./share-model.component.scss']
})
export class ShareModelComponent {

  @Input() showModal: boolean = false;
  @Input() fileShareLink: string = '';
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  description: string = 'Share your file and open it effortlessly for collaboration. Connect and collaborate seamlessly.';

  constructor(private message: NzMessageService) { }

  handleClose() {
    this.modalClosed.emit(true);
  }

  copyLink() {
    const linkInputElement = document.querySelector('.share-link') as HTMLInputElement;
    linkInputElement.select();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(linkInputElement.value)
        .then(() => {
          this.message.create('success', 'Link copied to clipboard');
        })
        .catch((error) => {
          console.error('Failed to copy link to clipboard:', error);
        });
    } else {
      console.error('Clipboard API not available');
    }
  }

}
