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
      "description": "Enjoy peace of mind with our platform's robust security measures, ensuring that your files are transferred securely and protected from unauthorized access."
    },
    {
      "title": "Empowering Decentralized Storage",
      "description": "Experience lightning-fast file transfers facilitated by our cutting-edge decentralized storage network, ensuring quick and efficient data transmission."
    },
    {
      "title": "Blazing Transfer Speeds",
      "description": "Experience unparalleled file transfer speeds thanks to our distributed infrastructure, optimizing data transmission efficiency."
    },
    {
      "title": "Automatic Expiration Dates",
      "description": "Set expiration dates for shared files, automatically revoking access after a specified period to enhance data security and confidentiality."
    },
    {
      "title": "Intuitive User Interface",
      "description": "Experience a sleek and user-friendly interface that simplifies file management, sharing, and collaboration for users of all technical levels."
    },
    {
      "title": "Free and Secure",
      "description": "Enjoy our decentralized file sharing platform for free, with the assurance that your files are encrypted during transit and storage, safeguarding your data and ensuring end-to-end privacy."
    }
  ]


}
