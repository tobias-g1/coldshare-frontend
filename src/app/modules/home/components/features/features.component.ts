import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  items = [
    {
      title: 'Secure File Transfers',
      description: "Enjoy peace of mind with our platform's robust security measures, ensuring that your files are transferred securely and protected from unauthorized access."
    },
    {
      title: 'Decentralized Storage',
      description: "Experience rapid file transfers thanks to the distributed nature of ColdStack's decentralized storage network, ensuring quick and efficient data transmission."
    },
    {
      title: 'Fast Transfer Speeds',
      description: "Experience rapid file transfers thanks to the distributed nature of ColdStack's decentralized storage network, ensuring quick and efficient data transmission."
    },
    {
      title: 'Expiration Dates',
      description: "Set expiration dates for shared files, automatically revoking access after a specified period to enhance data security and confidentiality."
    },
    {
      title: 'User Friendly',
      description: "User-Friendly Interface: Enjoy a sleek and intuitive user interface that makes file management, sharing, and collaboration effortless for users of all technical levels."
    },
    {
      title: 'Free',
      description: "Rest assured that your files are encrypted during transit and storage, safeguarding your data from prying eyes and ensuring end-to-end privacy."
    }
  ]

}
