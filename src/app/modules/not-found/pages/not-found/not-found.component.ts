import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  header: string = "Page Not Found";
  description: string = "Oops! It looks like the page you're looking for doesn't exist. But don't worry, our file management system is here to help you organize, manage, and access all your files in one convenient place. With our intuitive system, you can effortlessly categorize, search, and preview your files, allowing you to take full control of your digital assets and streamline your workflow. Experience seamless file management with ease!";
}
