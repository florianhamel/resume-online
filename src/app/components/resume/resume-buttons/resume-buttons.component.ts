import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-resume-buttons',
  templateUrl: './resume-buttons.component.html',
  styleUrls: ['./resume-buttons.component.less']
})
export class ResumeButtonsComponent {
  @Output() zoomChanged: EventEmitter<any> = new EventEmitter<any>();

  zoomOut(): void {
    this.zoomChanged.emit(-0.1);
  }
  zoomIn(): void {
    this.zoomChanged.emit(0.1);
  }
}
