import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Provider } from '@ethersproject/providers';
import { Signer } from 'ethers';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { Profile } from 'src/app/shared/models/user.model';

declare global {
  interface Window {
    ethereum: any;
  }
}

@Injectable({
  providedIn: 'root'
})

export class MetaMaskService {

  private selectedAddressSubject = new BehaviorSubject<string>(null);
  selectedAddress$ = this.selectedAddressSubject.asObservable();

  private isConnectedSubject = new BehaviorSubject<boolean>(false);
  isConnected$ = this.isConnectedSubject.asObservable();

  private provider: Web3Provider;
  private signer: Signer;

  private token: string;

  constructor(private userService: UserService) {

    if (typeof window.ethereum === 'undefined') {
      console.warn('MetaMask is not installed!');
      return;
    }

    this.provider = new Web3Provider(window.ethereum);

    this.signer = this.provider.getSigner() as any as Signer;

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length > 0) {

        this.selectedAddressSubject.next(accounts[0]);
        this.getToken(accounts[0]);
      } else {
        localStorage.removeItem('selectedAddress');
        this.selectedAddressSubject.next(null);
        this.token = null;
      }
    });

    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });

    const selectedAddress = localStorage.getItem('selectedAddress');
    if (selectedAddress) {
      this.selectedAddressSubject.next(selectedAddress);
      this.isConnectedSubject.next(true);
      this.getToken(selectedAddress);
    }
  }

  async connect(): Promise<void> {
    if (!this.provider || !window.ethereum) {
      console.warn('MetaMask is not installed!');
      return;
    }

    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        await this.getToken(accounts[0]);

        if (this.token) {
          localStorage.setItem('selectedAddress', accounts[0]);
          this.selectedAddressSubject.next(accounts[0]);
          this.isConnectedSubject.next(true);
        }

      } else {
        localStorage.removeItem('selectedAddress');
        this.selectedAddressSubject.next(null);
        this.isConnectedSubject.next(false);
        this.token = null;
      }
    } catch (error) {
      console.error(`Failed to connect to MetaMask: ${error.message}`);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts', params: [] });

      localStorage.removeItem('selectedAddress');
      localStorage.removeItem('token');
      this.userService.currentUser = null;
      this.selectedAddressSubject.next(null);
      this.isConnectedSubject.next(false);
      this.token = null;
    } catch (error) {
      console.error(`Failed to disconnect from MetaMask: ${error.message}`);
    }
  }

  async login(address: string): Promise<void> {
    if (!this.provider || !window.ethereum) {
      console.warn('MetaMask is not installed!');
      return;
    }

    try {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const message = `login:${timestamp}`;
      const signature = await this.signer.signMessage(message);
      const response = await fetch(environment.base + '/user/login/' + address, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message, signature })
      });

      const data = await response.json();
      const { token } = data;

      if (token) {
        localStorage.setItem('selectedAddress', address);
        localStorage.setItem('token', token);
        this.token = token;
        this.getUserProfile();
      } else {
        console.error(`Failed to get token from server`);
      }
    } catch (error) {
      console.error(`Failed to sign message: ${error.message}`);
    }
  }

  async verifyToken(): Promise<boolean> {
    if (!this.token) {
      return false;
    }

    try {
      const response = await fetch(`${environment.base}/user/verify`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      if (response.ok) {
        this.getUserProfile();
        return true;
      } else {
        localStorage.removeItem('token');
        this.token = null;
        return false;
      }
    } catch (error) {
      console.error(`Failed to verify token: ${error.message}`);
      return false;
    }
  }

  async getToken(address: string): Promise<void> {

    this.token = localStorage.getItem('token');

    if (!this.token) {
      await this.login(address);
    }
  }

  async logout(): Promise<void> {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('selectedAddress');
      this.token = null;
    } catch (error) {
      console.error(`Failed to logout: ${error.message}`);
    }
  }


  getUserProfile() {
    this.userService.getUser(this.selectedAddressSubject.value).subscribe((profile: Profile) => {
      this.userService.currentUser = profile;
    })
  }

}
