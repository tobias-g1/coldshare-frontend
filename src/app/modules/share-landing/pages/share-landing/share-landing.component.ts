import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/app/core/services/file/file.service';
import { File } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-share-landing',
  templateUrl: './share-landing.component.html',
  styleUrls: ['./share-landing.component.scss']
})
export class ShareLandingComponent implements OnInit {
  header: string = "You've Received A File";
  description: string = "You've recieved a file, use the options below to download your file."
  file: File;

  constructor(
    public fileService: FileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getFile();
  }

  getFile() {
    const link = this.route.snapshot.paramMap.get('link');
    this.fileService.getFileByShareLink(link)
      .subscribe(
        (file: File) => {
          this.file = file;
        },
        () => {
          this.router.navigateByUrl('/file-not-found');
        }
      );
  }
}
