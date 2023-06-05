import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss']
})
export class CodeModalComponent {
  @Input() showModal: boolean = false;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  verificationCode: string[] = ['', '', '', '', '', ''];

  handleClose() {
    this.modalClosed.emit(true);
  }

  copyCode() {
    const code = this.verificationCode.join('');
    this.copyToClipboard(code);
  }

  private copyToClipboard(text: string) {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }
}
