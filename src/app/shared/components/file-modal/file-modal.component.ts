import { Component, EventEmitter, Input, Output } from '@angular/core';
import { File } from '../../models/file.model';

@Component({
  selector: 'app-file-modal',
  templateUrl: './file-modal.component.html',
  styleUrls: ['./file-modal.component.scss']
})
export class FileModalComponent {

  @Input() showModal: boolean = false;
  @Input() file: File = null;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  description: string = 'Click the button below to download your file.';

  handleClose() {
    this.modalClosed.emit(true);
  }

}
