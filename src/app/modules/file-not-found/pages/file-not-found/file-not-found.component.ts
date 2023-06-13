import { Component } from '@angular/core';

@Component({
  selector: 'app-file-not-found',
  templateUrl: './file-not-found.component.html',
  styleUrls: ['./file-not-found.component.scss']
})
export class FileNotFoundComponent {
  header: string = "You're file couldn't be found or has expired."
  description: string = 'Organize, manage, and access all your files in one place. With our intuitive file management system, you can easily categorize, search, and preview your files. Take control of your digital assets and streamline your workflow. Experience seamless file management with ease!';
}
