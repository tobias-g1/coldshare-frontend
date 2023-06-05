import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-files',
  templateUrl: './shared-files.component.html',
  styleUrls: ['./shared-files.component.scss']
})
export class SharedFilesComponent {

  header: string = 'Shared with Me';
  description: string = 'Discover the files that others have shared with you. Easily access and collaborate on shared files, making teamwork and information exchange effortless. Stay connected and stay productive with our seamless file sharing experience!';

}
