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
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur dignissimos sint voluptat doloremque dolores recusandae illum voluptas ut nesciunt perspiciatis consequatur at et, ducimus repellenduscorporis iusto eaque omnis?'

  verificationCode: string[] = ['', '', '', '', '', ''];

  onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text/plain');
    const sanitizedData = pastedData?.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
    const digits = sanitizedData?.slice(0, 6).split('');

    for (let i = 0; i < 6; i++) {
      if (digits && digits[i]) {
        this.verificationCode[i] = digits[i];
      }
    }

    this.moveFocusToNextInput(0); // Move focus to the first input field
  }

  onInput(event: any, index: number) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.trim();

    if (inputValue.length === 1) {
      this.verificationCode[index] = inputValue;
      inputElement.blur();
      this.moveFocusToNextInput(index + 1); // Move focus to the next input field
    }
  }

  moveFocusToNextInput(currentIndex: number) {
    const nextIndex = currentIndex;
    if (nextIndex < this.verificationCode.length) {
      const nextInput = document.querySelector(`input[name=digit${nextIndex + 1}]`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  isFormFilled(): boolean {
    return this.verificationCode.every(digit => digit.length === 1);
  }

  submitForm() {
    if (this.verificationForm.valid) {
      console.log('Form submitted');
      // Perform additional form submission logic here
    }
  }
}
