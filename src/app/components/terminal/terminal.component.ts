import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.less']
})
export class TerminalComponent {
  isScriptRun: boolean = false;

  buildMenu(): void {
    this.isScriptRun = true;
  }
}
