import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent {
  @ViewChild('verificationForm', { static: false }) verificationForm: NgForm;
  header: string = 'Receive Files';
  description: string = 'Receive files securely with a unique pin code. Simply share the pin code with the sender, and they can easily upload files to your account. No need for complicated file transfer methods or email attachments. Access your received files anytime, anywhere. Start receiving files effortlessly!';

  verificationCode: string[] = ['', '', '', '', '', ''];
  inputElements: ElementRef[] = [];

  ngAfterViewInit() {
    this.inputElements.forEach((element, index) => {
      element.nativeElement.addEventListener('keydown', (event: KeyboardEvent) => this.onKeyDown(event, index));
      element.nativeElement.addEventListener('paste', (event: ClipboardEvent) => this.onPaste(event, index));
    });
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const inputValue = event.key.trim();

    if (inputValue === 'Backspace') {
      event.preventDefault();

      if (index > 0 && this.verificationCode[index] === '') {
        const previousInput = this.inputElements[index - 1].nativeElement as HTMLInputElement;
        previousInput.focus();
        previousInput.value = '';
        this.verificationCode[index - 1] = '';
      } else {
        this.verificationCode[index] = '';
      }
    } else if (/^[a-zA-Z0-9]+$/.test(inputValue)) {
      event.preventDefault();

      this.verificationCode[index] = inputValue.toUpperCase();
      this.updateInputValues();

      if (index < 5) {
        const nextInput = this.inputElements[index + 1].nativeElement as HTMLInputElement;
        nextInput.focus();
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
        if (index + i < 6) {
          this.verificationCode[index + i] = digit.toUpperCase();
        }
      });

      this.updateInputValues();

      if (index + digits.length < 6) {
        const nextInput = this.inputElements[index + digits.length].nativeElement as HTMLInputElement;
        nextInput.focus();
      }
    }
  }

  updateInputValues() {
    this.inputElements.forEach((element, index) => {
      element.nativeElement.value = this.verificationCode[index];
    });
  }

  isFormFilled(): boolean {
    return this.verificationCode.every(digit => digit.length === 1);
  }

  submitForm() {
    if (this.verificationForm.valid) {
      console.log('Form submitted');
    }
  }
}
