import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss']
})
export class CodeModalComponent implements OnInit, OnChanges {

  @Input() showModal: boolean = false;
  @Input() shareCode: any = null;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  verificationCode: string[] = ['', '', '', '', '', ''];

  constructor(private message: NzMessageService) {

  }

  ngOnInit() {
    this.checkAndSetVerificationCode();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.showModal && changes.showModal.currentValue === true) {
      this.checkAndSetVerificationCode();
    }
  }

  private checkAndSetVerificationCode() {
    if (this.shareCode) {
      this.setVerificationCode(this.shareCode);
    }
  }

  handleClose() {
    this.modalClosed.emit(true);
  }

  copyCode() {
    const code = this.shareCode || this.verificationCode.join('');
    this.copyToClipboard(code);
    this.message.create('success', `Code copied to clipboard`);
  }

  private setVerificationCode(code: string) {
    this.verificationCode = code.split('');
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
