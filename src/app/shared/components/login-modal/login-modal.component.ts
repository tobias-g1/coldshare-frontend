import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MetaMaskService } from 'src/app/core/services/metamask/metamask.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  @Input() showLogin: boolean = false;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  isConnecting: boolean = false;

  constructor(public metaMaskService: MetaMaskService) {

  }

  public async connectMetamask(): Promise<void> {
    if (this.isConnecting) {
      return;
    }
    this.isConnecting = true;
    await this.metaMaskService.connect();
    this.isConnecting = false;
    this.handleClose();
  }

  handleClose() {
    this.modalClosed.emit(true)
  }

}
