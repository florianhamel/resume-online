import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.less']
})
export class TerminalComponent {
  isCommandRun: boolean = false;

  buildMenu(): void {
    this.isCommandRun = !this.isCommandRun;
  }
}
