import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  items = [
    {
      "title": "Fortified File Transfers",
      "description": "Enjoy peace of mind as our platform employs robust security measures, ensuring that your files are securely transferred and protected from unauthorized access."
    },
    {
      "title": "Empowering Decentralized Storage",
      "description": "Experience lightning-fast file transfers facilitated by our cutting-edge decentralized storage network, guaranteeing quick and efficient data transmission."
    },
    {
      "title": "Blazing Transfer Speeds",
      "description": "Enjoy unparalleled file transfer speeds thanks to our distributed infrastructure, optimizing data transmission efficiency for swift and seamless file sharing."
    },
    {
      "title": "Free to Use",
      "description": "Experience the benefits of our decentralized file sharing platform completely free of charge."
    },
    {
      "title": "Intuitive User Interface",
      "description": "Enjoy a sleek and user-friendly interface that simplifies file management, sharing, and collaboration for users of all technical levels."
    },
    {
      "title": "Secure and Private",
      "description": "Rest assured knowing that your files are encrypted during transit and storage, ensuring the utmost security and end-to-end privacy for your data."
    }
  ];


}
