import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileService } from 'src/app/core/services/file/file.service';
import { MetaMaskService } from 'src/app/core/services/metamask/metamask.service';
import { File } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent {
  @ViewChildren('inputElement') inputElements: QueryList<ElementRef>;
  @ViewChild('verificationForm', { static: false }) verificationForm: NgForm;

  header = 'Receive Files';
  description = 'Receive files securely with a unique pin code. Simply share the pin code with the sender, and they can easily upload files to your account. No need for complicated file transfer methods or email attachments. Access your received files anytime, anywhere. Start receiving files effortlessly!';
  showFileModal = false;
  file: File = null;
  verificationCode: string[] = Array(6).fill('');

  constructor(
    public fileService: FileService,
    public metaMaskService: MetaMaskService
    ) { }

  onKeyDown(event: KeyboardEvent, index: number) {
    const inputValue = event.key.trim();

    if (inputValue === 'Backspace') {
      event.preventDefault();
      if (index > 0 && this.verificationCode[index] === '') {
        this.focusPreviousInput(index - 1);
      } else {
        this.verificationCode[index] = '';
      }
    } else if (/^[a-zA-Z0-9]+$/.test(inputValue) && event.key.length === 1 && !event.metaKey && !event.ctrlKey) {
      event.preventDefault();
      this.verificationCode[index] = inputValue.toUpperCase();
      this.updateInputValues();
      if (index < 5) {
        this.focusNextInput(index);
      }
    }
  }

  onPaste(event: ClipboardEvent, index: number) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text/plain');
    const sanitizedData = pastedData?.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
    const digits = sanitizedData?.slice(0, 6).split('');

    if (digits) {
      digits.forEach((digit, i) => {
        this.verificationCode[i] = digit.toUpperCase();
      });

      this.updateInputValues();
      this.focusNextInput(index + digits.length);
    }
  }

  focusPreviousInput(index: number) {
    const previousInput = this.inputElements.toArray()[index].nativeElement as HTMLInputElement;
    previousInput.focus();
    previousInput.value = '';
    this.verificationCode[index] = '';
  }

  focusNextInput(index: number) {
    const nextInput = this.inputElements.toArray()[index].nativeElement as HTMLInputElement;
    nextInput.focus();
  }

  updateInputValues() {

  }

  isFormFilled(): boolean {
    return this.verificationCode.every(digit => digit.length === 1);
  }

  submitForm() {
    if (this.verificationForm.valid) {
      const pinCode = this.verificationCode.join('');
      this.fileService.getFileByPinCode(pinCode).subscribe(
        (res: File) => {
          this.file = res;
          this.toggleFileModal();
        },
        (error) => {
          console.error('Error retrieving file:', error);
          // Handle the error
        }
      );
    }
  }

  toggleFileModal() {
    this.showFileModal = !this.showFileModal;
  }
}
