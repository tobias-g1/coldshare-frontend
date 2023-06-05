import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/core/services/file/file.service';
import { File } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.scss']
})
export class MyFilesComponent implements OnInit {
  header: string = 'My Files';
  description: string = 'Organize, manage, and access all your files in one place. With our intuitive file management system, you can easily categorize, search, and preview your files. Take control of your digital assets and streamline your workflow. Experience seamless file management with ease!';

  files: File[] = null;

  constructor(public fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getOwnedFiles().subscribe((res: File[]) => {
      this.files = res;
    });
  }
}
