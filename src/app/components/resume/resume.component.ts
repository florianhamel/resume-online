import {Component} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less']
})
export class ResumeComponent {
  zoomRatio: number = 0.8;
  srcPdf: string = "assets/documents/florian_hamel_en.pdf";

  adjustZoom(delta: number): void {
    this.zoomRatio += delta;
  }
}
