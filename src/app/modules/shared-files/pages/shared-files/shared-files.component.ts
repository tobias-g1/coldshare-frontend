import { Component } from '@angular/core';
import { FileService } from 'src/app/core/services/file/file.service';
import { File } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-shared-files',
  templateUrl: './shared-files.component.html',
  styleUrls: ['./shared-files.component.scss']
})
export class SharedFilesComponent {

  header: string = 'Shared with Me';
  description: string = 'Discover the files that others have shared with you. Easily access and collaborate on shared files, making teamwork and information exchange effortless. Stay connected and stay productive with our seamless file sharing experience!';

  files: File[] = null;

  constructor(public fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getSharedFiles().subscribe((res: File[]) => {
      this.files = res;
    });
  }

}
