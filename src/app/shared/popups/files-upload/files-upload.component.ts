import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss'],
})
export class FilesUploadComponent implements OnInit {
  isHovering!: boolean;
  constructor() {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
}
