import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-share-model',
  templateUrl: './share-model.component.html',
  styleUrls: ['./share-model.component.scss']
})
export class ShareModelComponent {

  @Input() showModal: boolean = false;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet luctus risus, eu consequat mi placerat vitae. Mauris aliquam mi ut elementum dapibus.';

  fileShareLink: string = 'https://example.com/file-share-link';

  handleClose() {
    this.modalClosed.emit(true);
  }

  copyLink() {
    const linkInputElement = document.querySelector('.share-link') as HTMLInputElement;
    linkInputElement.select();
    document.execCommand('copy');
  }

}
