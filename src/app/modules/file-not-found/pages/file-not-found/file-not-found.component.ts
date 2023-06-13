import { Component } from '@angular/core';

@Component({
  selector: 'app-file-not-found',
  templateUrl: './file-not-found.component.html',
  styleUrls: ['./file-not-found.component.scss']
})
export class FileNotFoundComponent {
  header: string = "Your File Couldn't Be Found or Has Expired";
  description: string = "We apologize, but it seems that the file you're looking for either couldn't be found or has expired. However, with our intuitive file management system, you can still enjoy seamless organization, management, and access to all your files in one convenient place. Effortlessly categorize, search, and preview your files to take full control of your digital assets and streamline your workflow. Experience the ease of our file management system today!";
  }
