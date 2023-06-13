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
  description: string = 'Send files securely and effortlessly. Share your documents, images, videos, and more with just a few clicks. Enjoy peace of mind knowing that your files are encrypted and protected during transit. Simplify file sharing and collaboration with our user-friendly platform. Start sending files today!';
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
