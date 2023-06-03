import { Component } from '@angular/core';
import { MetaMaskService } from '../services/metamask/metamask.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public connectedAddress: string;
  public avatarUrl: string;
  public isConnecting: boolean = false;
  public isConnected: boolean = false;
  public showLogin: boolean = false;

  constructor(private metaMaskService: MetaMaskService) {
    this.metaMaskService.selectedAddress$.subscribe((address) => {
      this.connectedAddress = address;
      if (this.connectedAddress) {
        this.avatarUrl = `https://avatars.dicebear.com/api/identicon/${this.connectedAddress}.svg`;
        this.isConnected = true;
      }
    });
    this.metaMaskService.isConnected$.subscribe((isConnected) => {
      this.isConnected = isConnected;
      this.isConnecting = false;
    });
  }

  public async disconnectWallet(): Promise<void> {
    await this.metaMaskService.disconnect();
    this.avatarUrl = null;
    this.isConnected = false;
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }
}
