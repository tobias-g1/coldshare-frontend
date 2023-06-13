import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  header: string = "Page Not Found"
  description: string = 'Organize, manage, and access all your files in one place. With our intuitive file management system, you can easily categorize, search, and preview your files. Take control of your digital assets and streamline your workflow. Experience seamless file management with ease!';
}
